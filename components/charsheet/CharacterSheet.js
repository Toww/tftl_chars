import Image from "next/image";
import { useContext } from "react";

// UI Components
import MainInfo from "components/charsheet/MainInfo";
import Attributes from "components/charsheet/Attributes";
import Conditions from "components/charsheet/Conditions";
import Skills from "components/charsheet/Skills";
import Experience from "components/charsheet/Experience";
import Relationships from "components/charsheet/Relationships";
import Items from "components/charsheet/Items";
import Hideout from "components/charsheet/Hideout";
import Notes from "components/charsheet/Notes";

// Importing data from contexts for the character object
import { AttributesContext } from "contexts/AttributesContext";
import { ConditionsContext } from "contexts/ConditionsContext";
import { SkillsContext } from "contexts/SkillsContext";
import { ExperienceContext } from "contexts/ExperienceContext";
import { MainInfoContext } from "contexts/MainInfoContext";
import { RelationshipsContext } from "contexts/RelationshipsContext";
import { ItemsContext } from "contexts/ItemsContext";
import { HideoutContext } from "contexts/HideoutContext";
import { NotesContext } from "contexts/NotesContext";

const CharacterSheet = () => {
  // Get data from respective contexts
  const { attributes } = useContext(AttributesContext);
  const { conditions } = useContext(ConditionsContext);
  const { skills } = useContext(SkillsContext);
  const { experience } = useContext(ExperienceContext);
  const {
    name,
    type,
    age,
    luckPoints,
    drive,
    anchor,
    problem,
    pride,
    description,
    favSong,
  } = useContext(MainInfoContext);
  const { relationships } = useContext(RelationshipsContext);
  const { items } = useContext(ItemsContext);
  const { hideout } = useContext(HideoutContext);
  const { notes } = useContext(NotesContext);

  const handleSubmit = () => {
    // Character object grouping all data from contexts
    const character = {
      attributes,
      conditions,
      skills,
      experience,
      relationships,
      items,
      hideout,
      notes,
      mainInfo: {
        name,
        type,
        age,
        luckPoints,
        drive,
        anchor,
        problem,
        pride,
        description,
        favSong,
      },
    };

    console.log(character);
  };

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
      <main>
        <div className="grid lg:grid-cols-3 gap-4">
          {/* --- Left Column --- */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Attributes />
            <Conditions />
            <Skills />
            <Experience />
          </div>
          {/* --- Right Column --- */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <MainInfo />
            <Relationships />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Items />
              <Hideout />
            </div>
            <Notes />
          </div>
        </div>
        {/* Separation line */}
        <div className="h-px my-6 bg-gray-300"></div>
        {/* Submit button */}
        <button
          className="bg-orange-400 text-white py-3 font-bold w-full"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </main>
    </>
  );
};

export default CharacterSheet;
