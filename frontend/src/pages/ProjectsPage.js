import React from "react";
import Chatbot from "../components/Chatbot";

import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div className="projectsPage-container">
      <div className="left-panel">
        <h1>Projects</h1>
      </div>

      <div className="right-panel">
        <Chatbot mode="Projects" />
      </div>
    </div>
  );
}

export default ProjectsPage;
