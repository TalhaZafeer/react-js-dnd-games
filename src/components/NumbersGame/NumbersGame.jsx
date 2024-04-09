import * as React from "react";
import { withTranslation } from "react-i18next";
import initialData from "../../initial-data";
import ClapsSound from "../../assets/sounds/claps.wav";
import MoveSound from "../../assets/sounds/move.wav";
import VerticalColumn from "../../styles/VerticalColumn";
import NumbersGameContext from "../drag_and_drop/NumbersGameContext";
import RestartGame from "../RestartGame";

class NumbersGame extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.restartGame = this.restartGame.bind(this);

    this.state = { ...initialData, win: false };
  }

  onDragEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const column = this.state.column;
    const numberIds = Array.from(column.numberIds);
    numberIds.splice(source.index, 1);
    numberIds.splice(destination.index, 0, draggableId);
    const numbers = numberIds.map((numberId) =>
      parseInt(this.state.numbers[numberId].content, 10)
    );
    const win = isSortedAsc(numbers);

    playSound(win);
    this.updateState(column, numberIds, win);
  }

  render() {
    const numbers = this.state.column.numberIds.map(
      (numberId) => this.state.numbers[numberId]
    );
    return (
      <div>
        <h3>{this.props.t("Drag title")}</h3>
        <h5>{this.props.t("Drag subtitle")}</h5>
        <RestartGame win={this.state.win} onRestart={this.restartGame} />
        <NumbersGameContext onDragEnd={this.onDragEnd}>
          <VerticalColumn column={this.state.column} items={numbers} />
        </NumbersGameContext>
      </div>
    );
  }

  restartGame() {
    this.setState({ ...initialData, win: false });
  }

  updateState(column, numberIds, win) {
    const newColumn = {
      ...column,
      numberIds,
    };

    this.setState({
      ...this.state,
      column: newColumn,
      win,
    });
  }
}

export default withTranslation()(NumbersGame);

export function isSortedAsc(list) {
  return list.every((val, i, arr) => !i || parseInt(val, 10) >= arr[i - 1]);
}

export function playSound(win, moveSound = MoveSound) {
  const sound = win ? ClapsSound : moveSound;
  new Audio(sound).play();
}
