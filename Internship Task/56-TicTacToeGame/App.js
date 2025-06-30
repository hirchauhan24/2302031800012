// ✅ App.js - Main Tic Tac Toe board
const App = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = React.useState(true);

  // ✅ Check winner
  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = checkWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return; // ignore if already filled or game over
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Tic Tac Toe Game</h2>
      <p>{winner ? `🎉 Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}</p>
      <div className="board">
        {squares.map((val, idx) => (
          <Square key={idx} value={val} onClick={() => handleClick(idx)} />
        ))}
      </div>
      <button onClick={handleReset} style={{ marginTop: "20px", padding: "10px 20px" }}>
        🔄 Restart
      </button>
    </div>
  );
};

// ✅ Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
