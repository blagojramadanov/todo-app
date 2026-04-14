import { useState } from "react";
import TodoItem from "./components/todoitem/TodoItem";
import Button from "../../components/button/Button";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (input === "") return;

    setTodos([
      ...todos,
      {
        id: Math.random(),
        content: input,
        done: false,
      },
    ]);

    setInput("");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    );
  }

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />

        <Button onClick={addTodo} text="Add" />
      </div>

      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todoItem={todo} toggleTodo={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
