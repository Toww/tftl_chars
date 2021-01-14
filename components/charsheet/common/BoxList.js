const BoxList = ({ title, listObject, setListObject }) => {
  const handleClick = (index) => {
    const newListObject = [...listObject];
    newListObject[index] = !listObject[index];
    setListObject(newListObject);
  };

  return (
    <div className="px-4 pt-2 pb-1 sm:pb-2 flex flex-wrap">
      {listObject.map((box, index) => (
        <div
          onClick={(e) => handleClick(index)}
          key={`${title}-${index}`}
          className="bg-white border flex-shrink-0 flex-wrap p-0.5 w-6 h-6 mr-1 mb-1 sm:mt-0"
        >
          {box ? <div className="w-full h-full bg-orange-400"></div> : ""}
        </div>
      ))}
    </div>
  );
};

export default BoxList;
