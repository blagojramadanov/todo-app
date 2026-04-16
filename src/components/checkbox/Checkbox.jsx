function Checkbox({ todoItem, handleChangeCheckbox }) {
  function handleChange(e) {
    handleChangeCheckbox({
      ...todoItem,
      done: e.target.checked,
    });
  }

  return (
    <div>
      <input type="checkbox" checked={todoItem.done} onChange={handleChange} />
      <label>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
