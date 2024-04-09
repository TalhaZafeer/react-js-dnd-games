import * as React from "react";
import { Droppable } from "react-beautiful-dnd";

export default (props) => (
  <Droppable
    droppableId={props.droppableId}
    direction={props.direction || "vertical"}
  >
    {(provided) => (
      <div
        className={props.className}
        ref={provided.innerRef}
        {...provided.droppableProps}
        {...provided.droppablePlaceholder}
      >
        {props.children}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);
