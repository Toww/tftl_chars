import { createContext, useState } from "react";

export const AttributesContext = createContext();

const AttributesContextProvider = ({ children }) => {
  const [attributes, setAttributes] = useState([
    { title: "Body", type: "body", value: 0 },
    { title: "Tech", type: "tech", value: 0 },
    { title: "Heart", type: "heart", value: 0 },
    { title: "Mind", type: "mind", value: 0 },
  ]);

  return (
    <AttributesContext.Provider value={attributes}>
      {children}
    </AttributesContext.Provider>
  );
};

export default AttributesContextProvider;
