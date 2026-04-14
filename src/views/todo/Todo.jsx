import { useState } from "react";
import TodoItem from "./components/todoitem/TodoItem";
import Button from "../../components/button/Button";

function Todo() {
  const [todo, setTodo] = useState({
    id: Math.random(),
    content: "NAJACE",
    done: false,
  });

  function handleChangeCheckbox() {
    setTodo({
      ...todo,
      done: !todo.done,
    });
  }

  function handleAddTodo() {
    setTodo({
      id: Math.random(),
      content: "NOV TODO",
      done: false,
    });
  }

  return (
    <div>
      <TodoItem todoItem={todo} handleChangeCheckbox={handleChangeCheckbox} />

      <Button onClick={handleAddTodo} text="Add" />
    </div>
  );
}

export default Todo;
