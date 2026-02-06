const fs = require("fs");
const path = require("path");

const HttpError = require("../models/http-error");

async function getAllProjects(req, res, next) {
  const filePath = path.join(__dirname, "../data/projects.json");

  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const projects = JSON.parse(rawData);

    res.status(200).json(projects);
  } catch (err) {
    return next(new HttpError("Failed to load projects", 500));
  }
}

exports.getAllProjects = getAllProjects;
