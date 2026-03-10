import React, { useState } from "react";
import Chatbot from "./Chatbot";
import "./MobileChatbotButton.css";

function MobileChatbotButton({ mode, content }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="chatbot-float-btn" onClick={() => setOpen(true)}>
        🤖
      </button>

      {open && (
        <div className="chatbot-overlay">
        <div className="chatbot-mobile-popup">
          <div className="chatbot-mobile-header">
            <span>AI Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <Chatbot mode={mode} content={content} />
        </div>
        </div>
      )}
    </>
  );
}

export default MobileChatbotButton;