# How to Deploy to Vercel (Required for Chatbot)

To make the chatbot work on a live site, you must deploy to a platform that supports serverless functions (like Vercel). **GitHub Pages will NOT work** because it only hosts static files and cannot securely hide your API key or run the `api/chat.js` code.

## Option 1: Deploy via Web Dashboard (Easiest)

1.  Push your latest code to GitHub.
2.  Go to [Vercel.com](https://vercel.com) and Sign Up/Login.
3.  Click **"Add New..."** -> **"Project"**.
4.  Import your `golden-plastics` repository.
5.  **Configure Environment Variables** (Critical Step):
    *   In the "Environment Variables" section, add:
        *   **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`
        *   **Value**: (Paste your Gemini API Key here - the one currently in your `.env` file)
6.  Click **Deploy**.

## Option 2: Deploy via CLI (Command Line)

1.  Install Vercel CLI:
    ```bash
    npm i -g vercel
    ```
2.  Run the deploy command:
    ```bash
    vercel
    ```
3.  Follow the prompts. When asked "Want to modify these settings?", answer **N** (No).
4.  **Add your API Key**:
    *   Once deployed, go to the Vercel Dashboard -> Project Settings -> Environment Variables.
    *   Add `GOOGLE_GENERATIVE_AI_API_KEY` with your key.
    *   You may need to **Redeploy** (Builds -> Redeploy) for the key to take effect.
