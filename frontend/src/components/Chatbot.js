import { useState } from "react";
import "./Chatbot.css";

function Chatbot({ mode }){
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

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
      const data = await res.json();
      setMessages(prev => [
        ...prev,
        { role: "bot", text: data.answer }
      ]);
    } catch(err) {
      setMessage(prev => [
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
