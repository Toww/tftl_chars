import { createContext, useState } from "react";

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState("");

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;
