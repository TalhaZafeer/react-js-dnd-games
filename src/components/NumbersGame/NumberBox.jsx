import * as React from "react";
import DraggableItemWrapper from "../drag_and_drop/DraggableItemWrapper";

export default (props) => {
  const className = `dnd-number size-${props.value}`;

  return (
    <DraggableItemWrapper draggableId={props.value} index={props.itemPosition}>
      <div className={className}>
        <div>{props.content}</div>
      </div>
    </DraggableItemWrapper>
  );
};
