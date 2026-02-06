import React, { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot";
import Container from "../components/Container";

import "./ProjectsPage.css";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("http://localhost:5000/projects");
        const data = await res.json();

        setProjects(data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    }

    fetchProjects();
  }, []);

  function handleAI(proj) {
  setActiveProject(proj);
  }
  return (
    <div className="projectsPage-container">
      <div className="left-panel">
        <h1>Projects</h1>
          {projects.map((proj) => (
            <Container
              data={{
                ...proj,
              }}
              onClick={() => handleAI(proj)}
              type={"project"}
            />
          ))}
        </div>
      <div className="right-panel">
        <Chatbot mode="Projects" content={activeProject}/>
      </div>
    </div>
  );
}

export default ProjectsPage;
