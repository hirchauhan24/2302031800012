//  Main Match Game logic
const App = () => {
  const [cards, setCards] = React.useState([]);
  const [flipped, setFlipped] = React.useState([]);

  React.useEffect(() => {
    //  Create 8 pairs of numbers and shuffle them
    const numbers = [...Array(8).keys()].flatMap(n => [n + 1, n + 1]);
    const shuffled = numbers.sort(() => Math.random() - 0.5);
    const prepared = shuffled.map((num, i) => ({
      id: i,
      number: num,
      isFlipped: false,
      isMatched: false
    }));
    setCards(prepared);
  }, []);

  const handleClick = (id) => {
    const newCards = cards.map(card =>
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    const flippedCards = [...flipped, id];
    setFlipped(flippedCards);

    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = newCards.find(c => c.id === firstId);
      const secondCard = newCards.find(c => c.id === secondId);

      if (firstCard.number === secondCard.number) {
        //  Matched
        setCards(newCards.map(card =>
          (card.id === firstId || card.id === secondId)
            ? { ...card, isMatched: true }
            : card
        ));
        setFlipped([]);
      } else {
        //  Not matched: flip back after delay
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              (card.id === firstId || card.id === secondId)
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlipped([]);
        }, 1000);
      }
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🧠 Number Match Game</h2>
      <div className="game-board">
        {cards.map(card => (
          <Card
            key={card.id}
            number={card.number}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => !card.isFlipped && !card.isMatched && handleClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
