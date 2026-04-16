import { useState } from "react";
import TodoHeader from "./components/todoheader/TodoHeader";
import TodoBody from "./components/todobody/TodoBody";
import Input from "../../components/input/Input";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function addTodo() {
    if (!value.trim()) return;

    const newTodo = {
      id: Math.random(),
      content: value,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setValue("");
  }

  function handleChangeCheckbox(updatedTodo) {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-container">
      <div className="todo-header">
        <TodoHeader />
      </div>

      <div className="todo-input-row">
        <Input value={value} setValue={setValue} />
        <button onClick={addTodo}>Add</button>
      </div>

      <TodoBody
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default Todo;
