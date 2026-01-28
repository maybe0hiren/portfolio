const express = require('express');
const router = express.Router();


const aiNormal = require('../AI/ai-normal');
const aiProjects = require('../AI/ai-projects');

router.post('/aiNormal', aiNormal.geminiInterface);
router.post('/aiProjects', aiProjects.knowThyRepoInterface);

module.exports = router;