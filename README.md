# One Fourteen Policy Assistant — Web App

A hosted AI chat app for managers to query the One Fourteen Whiskey Row Policy Handbook.

---

## Deploy in 2 Minutes on Railway (Free)

Railway is the easiest way to host this. Free tier is plenty for internal manager use.

### Step 1 — Upload your code
1. Go to https://railway.app and sign up (free)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Upload this folder to a new GitHub repo, OR use Railway's drag-and-drop deploy

### Step 2 — Set your API key
In Railway, go to your project → **Variables** tab → Add:
```
ANTHROPIC_API_KEY = your-api-key-here
```
Get your key at: https://console.anthropic.com/settings/keys

### Step 3 — Deploy
Railway auto-detects Node.js and runs `npm start`. Your app goes live at a URL like:
```
https://one-fourteen-policy.up.railway.app
```
Share that link with your managers — works on phone or desktop.

---

## Alternative: Deploy on Render (Also Free)

1. Go to https://render.com → New → Web Service
2. Connect your GitHub repo (or upload files)
3. Set:
   - Build command: `npm install`
   - Start command: `node server.js`
4. Add environment variable: `ANTHROPIC_API_KEY = your-key`
5. Deploy — you'll get a `.onrender.com` URL

---

## Run Locally (for testing)

```bash
cd one-fourteen-policy-app
npm install
ANTHROPIC_API_KEY=your-key-here node server.js
```
Open http://localhost:3000

---

## File Structure

```
one-fourteen-policy-app/
├── server.js          # Backend — proxies requests to Anthropic API
├── package.json       # Node dependencies
├── README.md          # This file
└── public/
    └── index.html     # Frontend chat interface
```

---

## How It Works

1. Manager opens the web app URL
2. They type a policy question
3. Frontend sends it to `/api/chat` on your server
4. Server securely calls Anthropic API with your key (never exposed to browser)
5. Answer is returned citing the specific handbook section
