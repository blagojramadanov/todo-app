import TodoItem from "../todoitem/TodoItem";

function TodoList({ todos, handleChangeCheckbox, deleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
