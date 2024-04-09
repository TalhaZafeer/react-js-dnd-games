import { Link } from "react-router-dom";

export default (props) => {
  return (
    <div className="game-card">
      <Link
        to={`/games/${props.gameId}`}
        className={`game-number-${props.gameId}`}
      />
      <span>{props.title}</span>
    </div>
  );
};
