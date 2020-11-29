const LineWithBox = ({ title, type, value }) => {
  return (
    <li>
      <label>{title}</label>
      <input
        type="text"
        name={type}
        id={type}
        // if value is set to 0 show an empty box
        value={value ? value : ""}
      />
    </li>
  );
};

export default LineWithBox;
