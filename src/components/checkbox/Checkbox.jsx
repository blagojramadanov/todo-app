function Checkbox({ todoItem, toggleTodo }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={() => toggleTodo(todoItem.id)}
      />

      <span>{todoItem.content}</span>
    </div>
  );
}

export default Checkbox;
