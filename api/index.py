# Vercel serverless function için ana handler
from backend.server import app

# Vercel için handler export
handler = app
