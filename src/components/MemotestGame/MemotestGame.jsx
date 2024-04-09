import React, { useState } from "react";
import movementSound from "../../assets/sounds/memotest-success.wav";
import { shuffleArray } from "../../utils";
import { playSound } from "../NumbersGame/NumbersGame";
import RestartGame from "../RestartGame";
import MemotestBox from "./MemotestBox";

const MemotestGame = (props) => {
  const [elements, setElements] = useState(buildInitialState(props.images));
  const [initialOrder, setInitialOrderinitialOrder] = useState(
    shuffleArray(Object.keys(elements))
  );
  const [firstElement, setFirstElement] = useState("");
  const [secondElement, setSecondElement] = useState("");
  const [win, setWin] = useState(false);

  const handleClick = (event) => {
    const clickedElement = event.currentTarget.dataset.id;

    if (secondElement || elements[clickedElement].visible) {
      return;
    }

    elements[clickedElement].visible = true;
    if (firstElement) {
      setSecondElement(clickedElement);

      if (firstElement.split("-")[0] !== clickedElement.split("-")[0]) {
        setTimeout(() => {
          const newElements = Object.assign({}, elements);
          newElements[firstElement].visible = false;
          newElements[clickedElement].visible = false;
          setElements(newElements);
        }, 500);
      } else {
        playSound(false, movementSound);
      }

      setFirstElement("");
      setSecondElement("");
    } else {
      setFirstElement(clickedElement);
    }

    if (Object.keys(elements).every((e) => elements[e].visible)) {
      setWin(true);
      playSound(true);
    }
  };

  const restartGame = () => {
    setWin(false);
    setFirstElement("");
    setSecondElement("");
    setElements(buildInitialState(props.images));
    setInitialOrderinitialOrder(shuffleArray(Object.keys(elements)));
  };

  return (
    <div className="memotest">
      <RestartGame win={win} onRestart={restartGame} />

      <div>
        {initialOrder.map((name) => (
          <MemotestBox
            key={name}
            id={name}
            onClick={handleClick}
            visible={elements[name].visible}
            img={elements[name].image}
          />
        ))}
      </div>
    </div>
  );
};

/**
 * Returns a IState object
 * @param images list of image files
 */
function buildInitialState(images) {
  return images.reduce((result, img) => {
    result[`${img.split("memotest/")[1].split(".")[0]}-1`] = {
      image: img,
      visible: false,
    };

    result[`${img.split("memotest/")[1].split(".")[0]}-2`] = {
      image: img,
      visible: false,
    };

    return result;
  }, {});
}

export default MemotestGame;
