import { useContext } from "react";
import { ExperienceContext } from "contexts/ExperienceContext";
import BoxList from "components/charsheet/common/BoxList";

const Experience = () => {
  // Getting related states from context
  const { experience, setExperience } = useContext(ExperienceContext);

  return (
    <div className="info-block">
      <h1 className="block-title">Experience</h1>
      <BoxList
        title="experience"
        listObject={experience}
        setListObject={setExperience}
      />
    </div>
  );
};

export default Experience;
