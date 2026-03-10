import React from "react";
import { useEffect, useState } from "react";
import Chatbot from "../components/Chatbot";
import Card from "../components/Card";
import MobileChatbotButton from "../components/MobileChatbotButton";
import "./HomePage.css";

function HomePage() {
  const [recentActivity, setRecentActivity] = useState(null);  
  useEffect(() => {
    async function getRecentActivity() {
      try{
        const res = await fetch("https://portfoliobackend.hirenlabs.com/currentActivity");
        const data = await res.json();

        setRecentActivity(data);
      } catch(err) {
        setRecentActivity("Failed to summarize" + err);
      }
    }
    getRecentActivity();
  }, [])
  return (
    <>
    <div className="page">
    <div className="home-container">
      <div className="left-panel">
        <div className="about">
          <h1>Hiren Waghmare</h1>
          <h3>Full-Stack Developer | AIML Student | Building AI Agents</h3>
          <h2 className="socials">
            Socials:
            <span className="social-links">
              <a className="link" href="https://x.com/maybe_hiren" target="_blank" rel="noopener noreferrer">X</a>
              <a className="link" href="https://www.linkedin.com/in/hirenwaghmare/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="link" href="https://github.com/maybe0hiren" target="_blank" rel="noopener noreferrer">Github</a>
            </span>
          </h2>
        </div>

        <div className="info-cards">
          <Card
            title="Projects"
            to="/projects"
          />
          <Card
            title="Certificates"
            to="/certificates"
          />
        </div>
        {recentActivity && (
          <div className="recentActivitiesPanel">
            <h1>Recent Activities</h1>
            <p>{recentActivity ?? "Loading..."}</p>
          </div>
        )}
      </div>

      <div className="right-panel">
        <Chatbot 
          mode="Normal"
        />
      </div>
    </div>
    </div>
    <MobileChatbotButton mode="Normal" />
    </>
  );
}

export default HomePage;
