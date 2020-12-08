import { useContext } from "react";
import StripedList from "components/charsheet/common/StripedList";
import { SkillsContext } from "contexts/SkillsContext";

const Skills = () => {
  // Getting related states from context
  const { skills, setSkills } = useContext(SkillsContext);

  return (
    <StripedList title="skills" listObject={skills} setListObject={setSkills} />
  );
};

export default Skills;
