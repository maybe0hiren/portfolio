const express = require("express");
const router = express.Router();

const projectFunctions = require("../functions/projects");

router.get("/", projectFunctions.getAllProjects);

module.exports = router;
