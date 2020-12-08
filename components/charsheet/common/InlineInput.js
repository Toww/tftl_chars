import BoxList from "./BoxList";

const InlineInput = ({ title, relState, relStateSetter, colSpan }) => {
  // This function will help choosing the good input depending on the title.
  const handleInput = () => {
    // If the current Inline Input is Luck Points, show the boxes
    if (title === "Luck Points") {
      return (
        <BoxList
          title={title}
          listObject={relState}
          setListObject={relStateSetter}
        />
      );
      // Pride inline input
    } else if (title === "Pride") {
      return (
        <div className="flex items-center flex-grow">
          <input
            className="h-8 flex-grow border-b border-gray-300 bg-transparent ml-3"
            type="text"
            name="name"
            id="name"
            // if value is set to 0 show an empty box
            value={relState.text}
            onChange={(e) =>
              relStateSetter((prevState) => {
                return { ...prevState, text: e.target.value };
              })
            }
          />
          <div
            onClick={(e) =>
              relStateSetter((prevState) => {
                return { ...prevState, checked: !prevState.checked };
              })
            }
            className="bg-white border flex-shrink-0 flex-wrap p-0.5 w-6 h-6 ml-2"
          >
            {relState.checked ? (
              <div className="w-full h-full bg-orange-400"></div>
            ) : (
              ""
            )}
          </div>
        </div>
      );
    } else {
      return (
        <input
          className="h-8 flex-grow border-b border-gray-300 bg-transparent ml-3"
          type="text"
          name="name"
          id="name"
          // if value is set to 0 show an empty box
          value={relState}
          onChange={(e) => relStateSetter(e.target.value)}
        />
      );
    }
  };

  return (
    <div
      className={`flex h-12 px-4 py-2 ${
        // If the inline input's title is Luck Points, switch background color to a darker orange
        title === "Luck Points" ? "bg-orange-100" : "bg-orange-50"
      } ${
        // If colSpan is set to 1, make it take one column (instead of two) for larger screens
        colSpan === "1" ? "col-span-2 md:col-span-1" : "col-span-2"
      }`}
    >
      <label className="uppercase font-bold text-xs align-top">{title}:</label>
      {handleInput()}
    </div>
  );
};

export default InlineInput;
