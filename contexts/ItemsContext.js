import { createContext, useState } from "react";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([
    { title: "", bonus: "+2" },
    { title: "", bonus: "" },
    { title: "", bonus: "" },
    { title: "", bonus: "" },
    { title: "", bonus: "" },
    { title: "", bonus: "" },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
