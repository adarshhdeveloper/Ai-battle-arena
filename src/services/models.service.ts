import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai"
import { ChatCohere } from "@langchain/cohere"
import appconfig from "../config/config.js";

export const geminiModel = new ChatGoogle({
    apiKey: appconfig.GOOGLE_API_KEY,
    model: "gemini-flash-latest",
});

export const mistralModle = new ChatMistralAI({
    apiKey: appconfig.MISTRAL_API_KEY,
    model : "mistral-medium-latest"
})

export const cohereModel = new ChatCohere({
    apiKey: appconfig.COHERE_API_KEY,
    model : "command-a-03-2025"
})