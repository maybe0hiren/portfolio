require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs/promises");

const HttpError = require("../models/http-error");

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const fivePostsFile = process.env.FIVE_POSTS_FILE;


async function getFivePosts(){
    try{
        return await fs.readFile(fivePostsFile, "utf-8");
    } catch(err) {
        throw new HttpError("Failed to retrieve saved posts", 500);
    }
}

async function getCurrentActivity(req, res, next) {
    try{
        const fivePosts = await getFivePosts();
        const model = ai.getGenerativeModel({ model : "gemini-2.5-flash" });
        const prompt = `You are supposed to create a brief paragraph about of what I am current doing in my academic life to be shown on my portfolio website. 
                        You are given the latest 5 posts from my account. 
                        Analyze them and give a concise summary.
                        Posts: ${fivePosts}`
        const response = await model.generateContent(prompt);
        const currentActivity = response.response.text();

        res.status(200).json(currentActivity);
    } catch(err) {
        return next(new HttpError("Failed to generate summary", 500));
    }
}

exports.getCurrentActivity = getCurrentActivity;