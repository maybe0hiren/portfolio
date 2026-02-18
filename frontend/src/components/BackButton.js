import "./BackButton.css";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate =  useNavigate();
  return (
    <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      <h1>{"<"}</h1>
    </button>
  );
}

export default BackButton;
