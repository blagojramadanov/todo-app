import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function TodoItem({ todoItem, handleChangeCheckbox }) {
  return (
    <div>
      <Checkbox
        todoItem={todoItem}
        handleChangeCheckbox={handleChangeCheckbox}
      />

      <Button />
    </div>
  );
}

export default TodoItem;
