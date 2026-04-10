from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone, timedelta
import requests


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# GitHub API Cache
github_cache: Dict[str, Any] = {
    "profile": {"data": None, "timestamp": None},
    "repos": {"data": None, "timestamp": None}
}
CACHE_DURATION = timedelta(minutes=5)

def is_cache_valid(cache_key: str) -> bool:
    """Check if cache is still valid"""
    cache_entry = github_cache.get(cache_key)
    if not cache_entry or not cache_entry["timestamp"]:
        return False
    return datetime.now(timezone.utc) - cache_entry["timestamp"] < CACHE_DURATION

def get_github_profile(username: str = "YigitSezenn") -> Dict[str, Any]:
    """Fetch GitHub profile with caching"""
    if is_cache_valid("profile"):
        logger.info("Returning cached profile data")
        return github_cache["profile"]["data"]
    
    try:
        url = f"https://api.github.com/users/{username}"
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        
        # Add custom email
        profile_data = {
            "name": data.get("name") or "Süleyman Yiğit",
            "login": data.get("login"),
            "bio": data.get("bio") or "QA Engineer & Jr Mobile Developer passionate about building quality software and automated testing solutions.",
            "avatar_url": data.get("avatar_url"),
            "public_repos": data.get("public_repos", 0),
            "followers": data.get("followers", 0),
            "html_url": data.get("html_url"),
            "email": "ysezenn@outlook.com"
        }
        
        # Update cache
        github_cache["profile"] = {
            "data": profile_data,
            "timestamp": datetime.now(timezone.utc)
        }
        
        logger.info(f"Fetched fresh profile data for {username}")
        return profile_data
        
    except requests.RequestException as e:
        logger.error(f"Error fetching GitHub profile: {str(e)}")
        raise HTTPException(status_code=503, detail="Failed to fetch GitHub profile")

def get_github_repos(username: str = "YigitSezenn") -> List[Dict[str, Any]]:
    """Fetch GitHub repositories with caching"""
    if is_cache_valid("repos"):
        logger.info("Returning cached repos data")
        return github_cache["repos"]["data"]
    
    try:
        url = f"https://api.github.com/users/{username}/repos"
        params = {
            "sort": "updated",
            "per_page": 100,
            "type": "public"
        }
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        repos_raw = response.json()
        
        # Format repos data
        repos_data = [
            {
                "id": repo.get("id"),
                "name": repo.get("name"),
                "description": repo.get("description") or "No description provided",
                "html_url": repo.get("html_url"),
                "language": repo.get("language"),
                "stargazers_count": repo.get("stargazers_count", 0),
                "forks_count": repo.get("forks_count", 0),
                "topics": repo.get("topics", [])
            }
            for repo in repos_raw
            if not repo.get("fork")  # Exclude forked repos
        ]
        
        # Update cache
        github_cache["repos"] = {
            "data": repos_data,
            "timestamp": datetime.now(timezone.utc)
        }
        
        logger.info(f"Fetched {len(repos_data)} repos for {username}")
        return repos_data
        
    except requests.RequestException as e:
        logger.error(f"Error fetching GitHub repos: {str(e)}")
        raise HTTPException(status_code=503, detail="Failed to fetch GitHub repositories")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# GitHub API Routes
@api_router.get("/github/profile")
async def github_profile():
    """Get GitHub profile information"""
    return get_github_profile()

@api_router.get("/github/repos")
async def github_repos():
    """Get GitHub repositories"""
    return get_github_repos()

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()