import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Square(props) {
  return (
    <button className="square" onClick={props.oprimeBoton}>
      {props.value}
    </button>
  );
}

function Board() {
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

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
