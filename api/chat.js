import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const config = {
    runtime: 'edge',
};

export default async function handler(req) {
    const { messages } = await req.json();

    const result = await streamText({
        model: google('gemini-1.5-flash'),
        messages,
    });

    return result.toDataStreamResponse();
}
