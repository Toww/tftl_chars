import { memo } from "react";

const StripedList = ({ title, listObject, setListObject }) => {
  const handleChange = (e, objIndex) => {
    // Copy array of objects
    const newArray = [...listObject];
    // Copying existing object and updating "value" property
    const newObject = { ...newArray[objIndex], value: e.target.value };
    // updating corresponding object in newArray
    newArray[objIndex] = newObject;
    // Updating the array of objects in context via setListObject
    setListObject(newArray);
  };

  return (
    <div className="info-block">
      <h1 className="block-title">{title} - {Math.random()}</h1>
      <ul className="c-striped-list">
        {listObject.map((attr, objIndex) => (
          <li key={`${title}-${attr.type}`}>
            <label>{attr.title}</label>
            <input
            className="box-input"
              type="text"
              name={attr.type}
              id={attr.type}
              // if value is set to 0 show an empty box
              value={attr.value ? attr.value : ""}
              onChange={(e) => handleChange(e, objIndex)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Used memo to avoid re-rendering every block / list each time
// an input value is changed, only concernet list will be re-rendered
export default memo(StripedList);
