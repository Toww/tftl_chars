import { createContext, useState } from "react";

export const ExperienceContext = createContext();

const ExperienceContextProvider = ({ children }) => {
  const [experience, setExperience] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <ExperienceContext.Provider value={{ experience, setExperience }}>
      {children}
    </ExperienceContext.Provider>
  );
};

export default ExperienceContextProvider;
