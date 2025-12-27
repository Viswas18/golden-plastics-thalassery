# How to Set Up Google Gemini API Key

1.  **Generate the Key**:
    *   Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   Click on **Create API key**.
    *   Select your project (or create a new one).
    *   Copy the generated API key.

2.  **Configure the Project**:
    *   Open the `.env` file in the root of your project (I have created this for you).
    *   Paste your key as the value for `GOOGLE_GENERATIVE_AI_API_KEY`.
    *   Example:
        ```env
        GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy...
        ```

3.  **Run the Project**:
    *   Since your project uses serverless functions in `api/`, standard `npm run dev` (Vite) might not serve them correctly without Vercel.
    *   To run locally with full API support:
        1.  Install Vercel CLI: `npm i -g vercel`
        2.  Run: `vercel dev`
