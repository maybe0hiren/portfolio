import { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot({ mode, content }){
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chatbotHeader, setChatbotHeader] = useState("");

  useEffect(() => {
    if (mode === "Normal") {
      setChatbotHeader("Ask me anything about Hiren...");
    } 
    else if (mode === "Projects") {
      setChatbotHeader(
        "Click on the project's AI icon to ask project specific questions..."
      );
    } 
    else if (mode === "Certificates") {
      if (content) {
        setChatbotHeader(
          `Answering questions for ${content.name}`
        );
      } else {
        setChatbotHeader(
          "Click on the Certificate's AI Icon to ask certificate specific questions..."
        );
      }
    }
  }, [mode, content]);

  async function sendMessage(){
    if(!message.trim() || loading) return;
    const userMessage = message;

    setMessage("");
    setLoading(true);

    setMessages(prev => [...prev, {role: "user", text: userMessage}]);
    try{
      let res;
      if (mode === "Normal"){
        res = await fetch("http://localhost:5000/aiNormal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message: userMessage })
        });
      }
      else if (mode === "Projects") {
        res = await fetch("http://localhost:5000/aiProjects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage,
            repoLink: "https://github.com/maybe0hiren/CloudStorage"
          })
        });
      }
      else if (mode === "Certificates") {
        res = await fetch("http://localhost:5000/aiCertificates", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            message: userMessage,
            certificateID: content.id
          })
        })
      }
      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { role: "bot", text: data.answer }
      ]);
    } catch(err) {
      setMessages(prev => [
        ...prev,
        { role: "bot",
          text: "Error Contacting AI Assistant"
        }
      ]);
    }

    setLoading(false);
  }

  return(
    <div className="chatbot">
      <h1 className="chatbot-title">AI Assistant Chatbot</h1>
      <h3 className="chatbot-header">{chatbotHeader}</h3>

      <div className="chat-area">
        {console.log("messages =", messages)}
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "msg user" : "msg bot"}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="msg bot">
            typing...
          </div>
        )}
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
