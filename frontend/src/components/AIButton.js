import "./AIButton.css";

function AIButton({ onClick }) {
  return (
    <button
      className="ai-btn"
      onClick={(e) => {
        e.stopPropagation(); // prevents card click
        onClick();
      }}
    >
      🤖 Ask AI
    </button>
  );
}

export default AIButton;
