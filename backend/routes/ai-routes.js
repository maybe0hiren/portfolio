const express = require('express');
const router = express.Router();


const aiController = require('../controllers/ai-controller');

router.post('/ai', aiController.geminiInterface);


module.exports = router;