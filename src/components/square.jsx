import React from "react";

function Square({ value, oprimeBoton }) {
  return (
    <button className="square" onClick={oprimeBoton}>
      {value}
    </button>
  );
}

export default Square;
