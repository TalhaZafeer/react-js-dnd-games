import * as React from "react";

export default (props) => {
  if (!props.win) {
    return null;
  }

  return (
    <div className="you-win">
      <div className="winner">Ganaste! 🎉 😁</div>
      <button onClick={props.onRestart}>Jugar de nuevo</button>
    </div>
  );
};
