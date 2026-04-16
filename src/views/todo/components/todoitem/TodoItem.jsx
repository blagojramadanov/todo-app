import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";

function TodoItem({ todoItem, handleChangeCheckbox, deleteTodo }) {
  return (
    <div className="todo-item">
      <Checkbox
        todoItem={todoItem}
        handleChangeCheckbox={handleChangeCheckbox}
      />
      <Button onClick={() => deleteTodo(todoItem.id)} />
    </div>
  );
}

export default TodoItem;
