const express = require('express');
const router = express.Router();


const aiNormal = require('../functions/AI/ai-normal');
const aiProjects = require('../functions/AI/ai-projects');

router.post('/aiNormal', aiNormal.geminiInterface);
router.post('/aiProjects', aiProjects.knowThyRepoInterface);

module.exports = router;