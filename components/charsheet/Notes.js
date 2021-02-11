import { useContext, memo } from "react";
import { NotesContext } from "contexts/NotesContext";

const Notes = () => {
  // Preparing context
  const { notes, setNotes } = useContext(NotesContext);

  return (
    <div className=" info-block flex flex-col mb-0">
      <h1 className="block-title">Notes</h1>
      <div className="h-full px-4 pt-2 pb-4 bg-orange-50 border-b border-l border-r border-gray-300">
        <textarea
          rows="3"
          maxLength="390"
          className="ruled-textarea"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default memo(Notes);
