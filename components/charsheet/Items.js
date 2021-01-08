import { useContext, memo } from "react";
import { ItemsContext } from "contexts/ItemsContext";

const Items = () => {
  // Preparing context
  const { items, setItems } = useContext(ItemsContext);

  const handleChange = (e, objIndex, inputType) => {
    // Copy array of objects
    const newArray = [...items];
    // Copying existing object and updating "value" property
    const newObject = { ...newArray[objIndex] };
    newObject[inputType] = e.target.value;
    // updating corresponding object in newArray
    newArray[objIndex] = newObject;
    // Updating the array of objects in context via setListObject
    setItems(newArray);
  };

  return (
    <div className="info-block mb-0">
      <h1 className="block-title">Items - {Math.random()}</h1>
      <ul className="c-list">
        {items.map((item, index) => (
          <li
            key={`item-${index}`}
            className="flex flex-col px-4 py-2"
          >
            {index === 0 ? (
              <label className="text-xs uppercase">Iconic item </label>
            ) : (
              ""
            )}
            <div className="flex flex-row flex-grow">
              {/* Item title */}
              <input
                className="line-input ml-0 mr-2"
                type="text"
                name={item.title}
                id={item.title}
                // if value is set to 0 show an empty box
                value={item.title ? item.title : ""}
                onChange={(e) => handleChange(e, index, "title")}
              />
              {/* Item bonus */}
              <input
                className="box-input text-lg"
                type="text"
                name={item.bonus}
                id={item.bonus}
                // if value is set to 0 show an empty box
                value={item.bonus ? item.bonus : ""}
                onChange={(e) => handleChange(e, index, "bonus")}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Items);
