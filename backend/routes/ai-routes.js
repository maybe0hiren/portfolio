const express = require('express');
const router = express.Router();


const aiNormal = require('../functions/AI/ai-normal');
const aiProjects = require('../functions/AI/ai-projects');
const aiCertificates = require('../functions/AI/ai-certificates');

router.post('/aiNormal', aiNormal.geminiInterface);
router.post('/aiProjects', aiProjects.knowThyRepoInterface);
router.post('/aiCertificates', aiCertificates.geminiCertificateInterface);

module.exports = router;