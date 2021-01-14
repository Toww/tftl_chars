import { memo } from "react";
import { useContext } from "react";
import { ExperienceContext } from "contexts/ExperienceContext";
import BoxList from "components/charsheet/common/BoxList";

const Experience = () => {
  // Getting related states from context
  const { experience, setExperience } = useContext(ExperienceContext);

  return (
    <div className="info-block flex flex-col mb-0">
      <h1 className="block-title">Experience - {Math.random()}</h1>
      <div className="h-auto min-h-full bg-orange-50 border-b border-l border-r border-gray-300">
        <BoxList
          title="experience"
          listObject={experience}
          setListObject={setExperience}
        />
      </div>
    </div>
  );
};

export default memo(Experience);
