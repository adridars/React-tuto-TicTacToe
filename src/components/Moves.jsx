import React from "react";

const Moves = ({ moveNumber, jumpTo }) => {
  // console.log(moveNumber);
  const gamePossition =
    moveNumber === 0 ? "Go to game Start" : "Go to move # " + moveNumber;

  return (
    <div>
      <button
        onClick={() => {
          jumpTo(moveNumber);
        }}
      >
        {gamePossition}
      </button>
    </div>
  );
};

export default Moves;
