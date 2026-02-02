require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const path = require("path");

const HttpError = require("../../models/http-error");

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

function getCertificateById(id) {
  const filePath = path.join(__dirname, "../../data/certificates.json");

  const rawData = fs.readFileSync(filePath, "utf-8");
  const certificates = JSON.parse(rawData);

  const certificate = certificates.find(
    (cert) => cert.id.toString() === id.toString()
  );

  if (!certificate) return null;

  return certificate.chatbot;
}

async function geminiCertificateInterface(req, res, next) {
  const { message, certificateID } = req.body;

  if (!message) {
    return next(new HttpError("Message not found", 400));
  }

  const chatbotData = getCertificateById(certificateID);

  if (!chatbotData) {
    return next(new HttpError("Certificate not found", 404));
  }

  const certificateInfo = JSON.stringify(chatbotData, null, 2);

  let prompt = `You are an AI assistant chatbot integrated inside my portfolio website. Here is some info about a certificate that I have earned: ${certificateInfo} Recruiters ask you questions about me and this certificate. You have to answer them. Keep it professional and reply naturally, dont add [Your name] and all in the reply... Don't generate more than 2-3 lines per reply and don't give any extra information until asked for. Here's the message: ${message}`


  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(prompt);

    res.json({
      answer: result.response.text()
    });
  } catch (err) {
    console.error("Gemini Error:", err);
    return next(new HttpError("AI bot error", 503));
  }
}

exports.geminiCertificateInterface = geminiCertificateInterface;
