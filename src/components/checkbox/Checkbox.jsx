function Checkbox({ todoItem, handleChangeCheckbox }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckbox}
      />

      <label>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
