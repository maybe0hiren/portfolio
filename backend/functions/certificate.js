const fs = require("fs");
const path = require("path");

const HttpError = require("../models/http-error");

async function getAllCertificates(req, res, next) {
  const filePath = path.join(__dirname, "../data/certificates.json");

  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const certificates = JSON.parse(rawData);

    const filteredCertificates = certificates.map((cert) => ({
      id: cert.id,
      name: cert.name,
      description: cert.description,
      link: cert.link,
      image: cert.image
    }));

    res.status(200).json(filteredCertificates);
  } catch (err) {
    return next(new HttpError("Failed to load certificates", 500));
  }
}

exports.getAllCertificates = getAllCertificates;
