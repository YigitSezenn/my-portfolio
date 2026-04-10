#!/usr/bin/env python3
"""
Backend API Testing Script
Tests all backend endpoints for the GitHub Gallery application
"""

import requests
import json
import sys
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get the backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'https://github-gallery.preview.emergentagent.com')
API_BASE_URL = f"{BACKEND_URL}/api"

def print_test_header(test_name):
    """Print a formatted test header"""
    print(f"\n{'='*60}")
    print(f"Testing: {test_name}")
    print(f"{'='*60}")

def print_result(success, message, details=None):
    """Print test result with formatting"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if details:
        print(f"Details: {details}")

def test_root_endpoint():
    """Test GET /api/ endpoint"""
    print_test_header("Root Endpoint - GET /api/")
    
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print_result(True, "Root endpoint working correctly", f"Response: {data}")
                return True
            else:
                print_result(False, "Unexpected response content", f"Got: {data}")
                return False
        else:
            print_result(False, f"HTTP {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_github_profile():
    """Test GET /api/github/profile endpoint"""
    print_test_header("GitHub Profile - GET /api/github/profile")
    
    try:
        response = requests.get(f"{API_BASE_URL}/github/profile", timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            
            # Check required fields
            required_fields = ["name", "login", "bio", "avatar_url", "public_repos", "followers", "html_url", "email"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                print_result(True, "GitHub profile endpoint working correctly")
                print(f"Profile data: {json.dumps(data, indent=2)}")
                return True
            else:
                print_result(False, "Missing required fields", f"Missing: {missing_fields}")
                return False
        else:
            print_result(False, f"HTTP {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_github_repos():
    """Test GET /api/github/repos endpoint"""
    print_test_header("GitHub Repositories - GET /api/github/repos")
    
    try:
        response = requests.get(f"{API_BASE_URL}/github/repos", timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check structure of first repo
                    first_repo = data[0]
                    required_fields = ["id", "name", "description", "html_url", "language", "stargazers_count", "forks_count", "topics"]
                    missing_fields = [field for field in required_fields if field not in first_repo]
                    
                    if not missing_fields:
                        print_result(True, f"GitHub repos endpoint working correctly - {len(data)} repositories found")
                        print(f"Sample repo: {json.dumps(first_repo, indent=2)}")
                        return True
                    else:
                        print_result(False, "Missing required fields in repo data", f"Missing: {missing_fields}")
                        return False
                else:
                    print_result(True, "GitHub repos endpoint working - no repositories found")
                    return True
            else:
                print_result(False, "Response is not a list", f"Got: {type(data)}")
                return False
        else:
            print_result(False, f"HTTP {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_mongodb_connection():
    """Test MongoDB connection by testing status endpoints"""
    print_test_header("MongoDB Connection - POST/GET /api/status")
    
    try:
        # Test POST /api/status
        test_data = {
            "client_name": f"test_client_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        }
        
        post_response = requests.post(f"{API_BASE_URL}/status", json=test_data, timeout=10)
        
        if post_response.status_code == 200:
            created_status = post_response.json()
            print_result(True, "POST /api/status working - MongoDB write successful")
            
            # Test GET /api/status
            get_response = requests.get(f"{API_BASE_URL}/status", timeout=10)
            
            if get_response.status_code == 200:
                status_list = get_response.json()
                
                if isinstance(status_list, list):
                    # Check if our created status is in the list
                    found = any(status.get("id") == created_status.get("id") for status in status_list)
                    
                    if found:
                        print_result(True, "GET /api/status working - MongoDB read successful")
                        print(f"Total status checks: {len(status_list)}")
                        return True
                    else:
                        print_result(False, "Created status not found in GET response")
                        return False
                else:
                    print_result(False, "GET response is not a list", f"Got: {type(status_list)}")
                    return False
            else:
                print_result(False, f"GET /api/status failed - HTTP {get_response.status_code}", get_response.text)
                return False
        else:
            print_result(False, f"POST /api/status failed - HTTP {post_response.status_code}", post_response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def test_error_handling():
    """Test error handling for non-existent endpoints"""
    print_test_header("Error Handling - Non-existent endpoint")
    
    try:
        response = requests.get(f"{API_BASE_URL}/nonexistent", timeout=10)
        
        if response.status_code == 404:
            print_result(True, "Error handling working correctly - 404 for non-existent endpoint")
            return True
        else:
            print_result(False, f"Expected 404, got HTTP {response.status_code}", response.text)
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, "Request failed", str(e))
        return False

def main():
    """Run all tests"""
    print(f"Backend API Testing")
    print(f"Testing against: {API_BASE_URL}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    
    tests = [
        ("Root Endpoint", test_root_endpoint),
        ("GitHub Profile", test_github_profile),
        ("GitHub Repositories", test_github_repos),
        ("MongoDB Connection", test_mongodb_connection),
        ("Error Handling", test_error_handling)
    ]
    
    results = {}
    
    for test_name, test_func in tests:
        try:
            results[test_name] = test_func()
        except Exception as e:
            print_result(False, f"Test {test_name} crashed", str(e))
            results[test_name] = False
    
    # Summary
    print(f"\n{'='*60}")
    print("TEST SUMMARY")
    print(f"{'='*60}")
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())