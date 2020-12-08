import { createContext, useState } from "react";

export const MainInfoContext = createContext();

const MainInfoContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [luckPoints, setLuckPoints] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [drive, setDrive] = useState("");
  const [anchor, setAnchor] = useState("");
  const [problem, setProblem] = useState("");
  const [pride, setPride] = useState({ text: "", checked: false });
  const [description, setDescription] = useState("");
  const [favSong, setFavSong] = useState("");

  return (
    <MainInfoContext.Provider
      value={{
        name,
        setName,
        type,
        setType,
        age,
        setAge,
        luckPoints,
        setLuckPoints,
        drive,
        setDrive,
        anchor,
        setAnchor,
        problem,
        setProblem,
        pride,
        setPride,
        description,
        setDescription,
        favSong,
        setFavSong,
      }}
    >
      {children}
    </MainInfoContext.Provider>
  );
};

export default MainInfoContextProvider;
