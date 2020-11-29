import Image from "next/image";
import { useContext } from "react";

// Contexts
import { AttributesContext } from "contexts/AttributesContext";
import { ConditionsContext } from "contexts/ConditionsContext";
import { SkillsContext } from "contexts/SkillsContext";

// UI Components
import StripedList from "./StripedList";

const CharacterSheet = () => {
  // Preparing Character info
  const { attributes, setAttributes } = useContext(AttributesContext);
  const { conditions, setConditions } = useContext(ConditionsContext);
  const { skills, setSkills } = useContext(SkillsContext);

  return (
    <>
      {/* --- Page Header --- */}
      <header className="max-w-lg mx-auto mb-8">
        {/* TFTL LOGO */}
        <Image
          src="/img/tftl-logo.png"
          alt="Tales From The Loop logo"
          width={800}
          height={136}
        />
      </header>

      {/* --- Page Main Content --- */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* --- Left Column --- */}
        <div className="lg:col-span-1">
          {/* Attributes */}
          <StripedList
            title="Attributes"
            listObject={attributes}
            setListObject={setAttributes}
          />
          {/* Conditions */}
          <StripedList
            title="Conditions"
            listObject={conditions}
            setListObject={setConditions}
          />
          {/* Skills */}
          <StripedList
            title="Skills"
            listObject={skills}
            setListObject={setSkills}
          />
        </div>
        {/* --- Right Column --- */}
        <div className="lg:col-span-2"></div>
      </main>
    </>
  );
};

export default CharacterSheet;
