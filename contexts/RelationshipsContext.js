import { createContext, useState } from "react";

export const RelationshipsContext = createContext();

const RelationshipsContextProvider = ({ children }) => {
  const [relationships, setRelationships] = useState([
    { title: "Kid 1", value: "" },
    { title: "Kid 2", value: "" },
    { title: "Kid 3", value: "" },
    { title: "Kid 4", value: "" },
    { title: "NPC 1", value: "" },
    { title: "NPC 2", value: "" },
  ]);

  return (
    <RelationshipsContext.Provider value={{ relationships, setRelationships }}>
      {children}
    </RelationshipsContext.Provider>
  );
};

export default RelationshipsContextProvider;
