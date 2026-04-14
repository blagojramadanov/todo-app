import Checkbox from "../../../../components/checkbox/Checkbox";

function TodoItem({ todoItem, toggleTodo }) {
  return (
    <div>
      <Checkbox todoItem={todoItem} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoItem;
