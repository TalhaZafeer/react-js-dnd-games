import DroppableWrapper from "../components/drag_and_drop/DroppableWrapper";
import DraggableListItems from "../components/NumbersGame/NumberListItems";

export default (props) => (
  <DroppableWrapper droppableId={props.column.id} className="source">
    <DraggableListItems items={props.items} className="vertical" />
  </DroppableWrapper>
);
