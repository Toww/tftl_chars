import { useContext } from "react";
import { NotesContext } from "contexts/NotesContext";

const Notes = () => {
  // Preparing context
  const { notes, setNotes } = useContext(NotesContext);

  return (
    <div className="info-block mb-0">
      <h1 className="block-title">Notes</h1>
      <div className="px-4 pt-2 pb-4">
        <textarea rows="3" maxlength="390" className="ruled-textarea">Hello</textarea>
      </div>
    </div>
  );
};

export default Notes;
