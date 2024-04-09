import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";

export default (props) => (
  <div className="dnd-game">
    <DragDropContext onDragEnd={props.onDragEnd}>
      {props.children}
    </DragDropContext>
  </div>
);
