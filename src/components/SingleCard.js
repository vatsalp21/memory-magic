import React from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className={flipped ? "flipped" : ""}>
      <div className="card">
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            onClick={handleClick}
            src="/img/cover.png"
            alt="card back "
          />
        </div>
      </div>
    </div>
  );
}
