import { useState } from "react";
import HorizontalColumn from "../../styles/HorizontalColumn";
import WidthError from "../../styles/WidthError";
import { move, reorder } from "../../utils";
import NumbersGameContext from "./NumbersGameContext";
import { isSortedAsc, playSound } from "../NumbersGame/NumbersGame";
import RestartGame from "../RestartGame";

export default function TwoHorizontalColumn(props) {
  const [data, setData] = useState(props.data);
  const [win, setWin] = useState(false);

  const getColumn = (id) => data[id];

  const restartGame = () => {
    setWin(false);
    setData(props.data);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    let newData;

    // dropped inside the same row
    if (source.droppableId === destination.droppableId) {
      const newColumn = reorder(
        getColumn(source.droppableId),
        source.index,
        destination.index
      );

      newData = Object.assign({}, data, { [source.droppableId]: newColumn });
      setData(newData);
    } else {
      newData = move(
        getColumn(source.droppableId),
        getColumn(destination.droppableId),
        source,
        destination
      );

      setData({
        column1: newData.column1,
        column2: newData.column2,
      });
    }

    const sorted = isSortedAsc(
      newData.column1.concat(newData.column2).map((item) => item.id)
    );
    setWin(sorted);
    playSound(sorted);
  };

  const items1 = data.column1.map((item) => item.id);
  const items2 = data.column2.map((item) => item.id);
  return (
    <div className="numbers-list-game">
      <WidthError />
      <RestartGame win={win} onRestart={restartGame} />

      <NumbersGameContext onDragEnd={onDragEnd}>
        <HorizontalColumn
          column={{ id: "column1", numberIds: items1 }}
          items={data.column1}
        />
        <HorizontalColumn
          column={{ id: "column2", numberIds: items2 }}
          items={data.column2}
        />
      </NumbersGameContext>
    </div>
  );
}
