import { createContext, useState } from "react";

export const HideoutContext = createContext();

const HideoutContextProvider = ({ children }) => {
  const [hideout, setHideout] = useState("");

  return (
    <HideoutContext.Provider value={{ hideout, setHideout }}>
      {children}
    </HideoutContext.Provider>
  );
};

export default HideoutContextProvider;
