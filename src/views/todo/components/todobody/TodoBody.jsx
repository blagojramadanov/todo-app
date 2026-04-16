import TodoList from "../todolist/TodoList";

function TodoBody({ todos, handleChangeCheckbox, deleteTodo }) {
  return (
    <div>
      <TodoList
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoBody;
