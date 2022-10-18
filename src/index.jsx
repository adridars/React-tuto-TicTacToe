import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Board";
import calculateWinner from "./components/winnerCalculation";

const Game = () => {
  const [historyMove, setHistoryMove] = useState([
    { move: new Array(9).fill(null) },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const actualMove = historyMove[historyMove.length - 1].move;

  const handleClick = function (va) {
    const move = actualMove.slice();
    if (move[va] || calculateWinner(move)) {
      return;
    }
    move[va] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setHistoryMove(historyMove.concat({ move }));
  };
  const winner = calculateWinner(actualMove);
  let status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="game">
      <div className="game-board">
        <Board squaresValue={actualMove} handleClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// "start": "react-scripts start",
