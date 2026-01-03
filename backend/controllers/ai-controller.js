import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

const HttpError = require('../models/http-error');


const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


async function geminiInterface(req, res, next) {
    const message = req.body.message;
    if (!message){
        const error = new HttpError(
            'Message not found', 400
        )
        return next(error);
    }
    let prompt = `You are an AI assistant chatbot integrated inside my portfolio website. Recruiters ask you questions about me and you have to answer them. Keep it professional. Here's the message: ${message}`
    const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash"
    });
    let reply;
    try{
        reply = await(model.generateContent(prompt));
    } catch(err){
        const error = new HttpError(
            'AI bot error', 503
        );
        return next(error);
    }
    res.json({reply: reply.response.text()});
}


exports.geminiInterface = geminiInterface;

