const express = require('express');
const router = express.Router();

const currentActivity = require("../functions/current-activity");

router.get('/currentActivity', currentActivity.getCurrentActivity);

module.exports = router;