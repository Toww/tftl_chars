import { useContext, memo } from "react";
import { RelationshipsContext } from "contexts/RelationshipsContext";

const Relationships = () => {
  // Preparing context
  const { relationships, setRelationships } = useContext(RelationshipsContext);

  const handleChange = (e, objIndex) => {
    // Copy array of objects
    const newArray = [...relationships];
    // Copying existing object and updating "value" property
    const newObject = { ...newArray[objIndex], value: e.target.value };
    // updating corresponding object in newArray
    newArray[objIndex] = newObject;
    // Updating the array of objects in context via setListObject
    setRelationships(newArray);
  };

  return (
    <div className="info-block">
      <h1 className="block-title">Relationships - {Math.random()}</h1>
      <ul className="c-list">
        {relationships.map((rel, index) => (
          <li key={rel.title} className="flex items-center flex-grow px-4 py-2">
            <label className="input-title text-xs" htmlFor={rel.title}>
              {rel.title}
            </label>
            <input
              className="line-input"
              type="text"
              name={rel.title}
              id={rel.title}
              value={rel.value ? rel.value : ""}
              onChange={(e) => handleChange(e, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Relationships);
