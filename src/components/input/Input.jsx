function Input({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="To-do eingeben"
    />
  );
}

export default Input;
