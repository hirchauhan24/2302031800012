//  Card.js - One game card
const Card = ({ number, isFlipped, isMatched, onClick }) => {
  const cardClass = `card ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`;

  return (
    <div className={cardClass} onClick={onClick}>
      {isFlipped || isMatched ? number : "?"}
    </div>
  );
};
