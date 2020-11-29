import { createContext, useState } from "react";

export const ConditionsContext = createContext();

const ConditionsContextProvider = ({ children }) => {
  const [conditions, setConditions] = useState([
    { title: "Upset", type: "upset", value: 0 },
    { title: "Scared", type: "scared", value: 0 },
    { title: "Exhausted", type: "exhausted", value: 0 },
    { title: "Injured", type: "injured", value: 0 },
    { title: "Broken", type: "broken", value: 0 },
  ]);

  return (
    <ConditionsContext.Provider value={{conditions, setConditions}}>
      {children}
    </ConditionsContext.Provider>
  );
};

export default ConditionsContextProvider;
