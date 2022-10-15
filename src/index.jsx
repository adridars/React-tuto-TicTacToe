import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Board";
import calculateWinner from "./components/winnerCalculation";

const Game = () => {
  const [squaresValue, setSquaresValue] = useState(new Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = function (va) {
    const squares = squaresValue.slice();
    if (squares[va] || calculateWinner(squaresValue)) {
      return;
    }
    squares[va] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquaresValue(squares);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squaresValue={squaresValue}
          calculateWinner={calculateWinner}
          xIsNext={xIsNext}
          handleClick={handleClick}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// "start": "react-scripts start",
