import React from "react";
import Square from "./square";

function Board({ squaresValue, calculateWinner, xIsNext, handleClick }) {
  function renderSquare(a) {
    return (
      <Square
        value={squaresValue[a]}
        oprimeBoton={() => {
          handleClick(a);
        }}
      />
    );
  }
  const winner = calculateWinner(squaresValue);
  let status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
