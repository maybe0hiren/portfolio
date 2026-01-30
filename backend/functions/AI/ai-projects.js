require('dotenv').config();

const HttpError = require('../../models/http-error');

async function knowThyRepoInterface(req, res, next){
    const message = req.body.message;
    const repoLink = req.body.repoLink;
    if (!message || !repoLink){
        const error = new HttpError(
            'Message not found', 400
        )
        return next(error);
    }
    try{
        const response = await fetch(
            "https://knowthyrepo.onrender.com/knowThyRepo",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
                },
                body: JSON.stringify({
                    repoLink: repoLink,
                    question: message
                }),
            }
        );
        const data = await response.json();
        if (!response.ok){
            const error = new HttpError(
                data.error || "knowThyRepo error",
                response.status
            );
            return next(error);
        }

        const answer = data.answer;
        console.log(answer);
        res.json({
            answer: answer
        });
    } catch(err) {
        const error = new HttpError(
            "Something went wrong while calling KnowThyRepo", 500
        );
        return next(error);
    }
}

exports.knowThyRepoInterface = knowThyRepoInterface;