import * as React from "react";
import DroppableWrapper from "../components/drag_and_drop/DroppableWrapper";
import DraggableListItems from "../components/NumbersGame/NumberListItems";

export default (props) => (
  <div>
    <DroppableWrapper
      droppableId={props.column.id}
      className="source"
      direction="horizontal"
    >
      <DraggableListItems items={props.items} className="horizontal" />
    </DroppableWrapper>
  </div>
);
