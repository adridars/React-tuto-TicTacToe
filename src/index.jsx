import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Board from "./components/Board";
import calculateWinner from "./components/winnerCalculation";
import Moves from "./components/Moves";

const Game = () => {
  //states and initial values

  const [historyMove, setHistoryMove] = useState([
    { move: new Array(9).fill(null), id: Date.now() },
  ]);
  const [xIsNext, setXIsNext] = useState(true);
  const [filteredIndex, setFilteredIndex] = useState(0);

  const actualMove = filteredIndex
    ? historyMove[filteredIndex].move
    : historyMove[historyMove.length - 1].move;

  //functions

  const handleClick = function (va) {
    // if (filteredIndex) {
    //   setHistoryMove((prevState) => [...prevState.slice(filteredIndex)]);
    //   return;
    // }
    // setFilteredIndex(0);

    const move = actualMove.slice();
    if (move[va] || calculateWinner(move)) {
      return;
    }
    move[va] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setHistoryMove((prevState) => [...prevState, { move, id: Date.now() }]);
    setFilteredIndex(historyMove.length);
  };

  const jumpTo = (inx) => {
    setFilteredIndex(inx);
    setXIsNext(inx % 2 === 0);
  };

  const winner = calculateWinner(actualMove);

  let status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  // father component render

  return (
    <div className="game">
      <div className="game-board">
        <Board squaresValue={actualMove} handleClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {historyMove.map((move, index) => {
            return <Moves key={move.id} jumpTo={jumpTo} moveNumber={index} />;
          })}
        </ol>
      </div>
    </div>
  );
};

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

// "start": "react-scripts start",
