require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const HttpError = require('../../models/http-error');


const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const aboutME = process.env.ABOUT_ME


async function geminiInterface(req, res, next) {
    const message = req.body.message;
    if (!message){
        const error = new HttpError(
            'Message not found', 400
        )
        return next(error);
    }
    let prompt = `Hi, Here is my quick introduction ${aboutME}. You are an AI assistant chatbot integrated inside my portfolio website. Recruiters ask you questions about me and you have to answer them. Keep it professional and reply naturally, dont add [Your name] and all in the reply... Don't generate more than 2-3 lines per reply and don't give any extra information until asked for. Here's the message: ${message}`
    const model = ai.getGenerativeModel({
        model: "gemini-2.5-flash"
    });
    let reply;
    try{
        reply = await(model.generateContent(prompt));
    } catch(err){
        console.error("Gemini Error: ", err);
        const error = new HttpError(
            'AI bot error', 503
        );
        return next(error);
    }
    res.json({answer: reply.response.text()});
}


exports.geminiInterface = geminiInterface;

