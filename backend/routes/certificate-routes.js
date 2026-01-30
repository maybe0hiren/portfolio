const express = require("express");
const router = express.Router();

const certificatesFunctions = require("../functions/certificate");

router.get("/", certificatesFunctions.getAllCertificates);

module.exports = router;
