import { useState } from "react";
import "./Chatbot.css";

function Chatbot(){
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, message]);
    setMessage("");
  };

  return(
    <div className="chatbot">
      <h1 className="chatbot-title">AI Assistant Chatbot</h1>

      <div className="chat-area">
        {messages.map((msg, i) => (
          <div key={i} className="msg">
            {msg}
          </div>
        ))}
      </div>

      <div className="input-row">
        <div className="type">
          <input
            type="text"
            placeholder="Type your message..."
            className="chat-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
        </div>

        <button className="send-btn" onClick={sendMessage}>
          Send ➤
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
