import { createContext, useState } from "react";

export const SkillsContext = createContext();

const SkillsContextProvider = ({ children }) => {
  const [skills, setSkills] = useState([
    { title: "Sneak (Body)", type: "sneak", value: 0 },
    { title: "Force (Body)", type: "force", value: 0 },
    { title: "Move (Body)", type: "move", value: 0 },
    { title: "Tinker (Tech)", type: "tinker", value: 0 },
    { title: "Program (Tech)", type: "program", value: 0 },
    { title: "Calculate (Tech)", type: "calculate", value: 0 },
    { title: "Contact (Heart)", type: "contact", value: 0 },
    { title: "Charm (Heart)", type: "charm", value: 0 },
    { title: "Lead (Heart)", type: "lead", value: 0 },
    { title: "Investigate (Mind)", type: "investigate", value: 0 },
    { title: "Comprehend (Mind)", type: "comprehend", value: 0 },
    { title: "Empathize (Mind)", type: "empathize", value: 0 },
  ]);

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
