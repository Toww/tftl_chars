import Image from "next/image";
import { useContext, useEffect } from "react";
const _ = require("lodash");

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

// COntexts
import { AttributesContext } from "contexts/AttributesContext";
import { ConditionsContext } from "contexts/ConditionsContext";
import { SkillsContext } from "contexts/SkillsContext";
import { ExperienceContext } from "contexts/ExperienceContext";
import { MainInfoContext } from "contexts/MainInfoContext";
import { RelationshipsContext } from "contexts/RelationshipsContext";
import { ItemsContext } from "contexts/ItemsContext";
import { HideoutContext } from "contexts/HideoutContext";
import { NotesContext } from "contexts/NotesContext";

const CharacterSheet = ({ character }) => {
  // Get every context variables
  const { attributes, setAttributes } = useContext(AttributesContext);
  const { conditions, setConditions } = useContext(ConditionsContext);
  const { skills, setSkills } = useContext(SkillsContext);
  const { experience, setExperience } = useContext(ExperienceContext);
  const {
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
  } = useContext(MainInfoContext);
  const { relationships, setRelationships } = useContext(RelationshipsContext);
  const { items, setItems } = useContext(ItemsContext);
  const { hideout, setHideout } = useContext(HideoutContext);
  const { notes, setNotes } = useContext(NotesContext);

  // On component first load :
  useEffect(() => {
    if (character) {
      // If a character was passed as a prop, set every context to be updated with its values
      setAttributes(character.attributes);
      setConditions(character.conditions);
      setSkills(character.skills);
      setExperience(character.experience);
      setRelationships(character.relationships);
      setItems(character.items);
      setHideout(character.hideout);
      setNotes(character.notes);
      setName(character.mainInfo.name);
      setType(character.mainInfo.type);
      setAge(character.mainInfo.age);
      setLuckPoints(character.mainInfo.luckPoints);
      setDrive(character.mainInfo.drive);
      setAnchor(character.mainInfo.anchor);
      setProblem(character.mainInfo.problem);
      setPride(character.mainInfo.pride);
      setDescription(character.mainInfo.description);
      setFavSong(character.mainInfo.favSong);
    }
  }, []);

  // Submitting the character sheet form
  const handleSubmit = () => {
    // Character object grouping all data from contexts
    const charNewInfo = {
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

    // If a Character was passed as prop
    if (character) {
      // If there is a character passed as a prop, add its id to charNewInfo and check it
      charNewInfo._id = character._id;

      // Comparing the two objects using lodash to see if any modification
      // was made on the character sheet since it was loaded from db.
      const charValuesChanged = !_.isEqual(character, charNewInfo);

      charValuesChanged
        ? console.log("Sending updated char to db!")
        : console.log("No modifications were made to the character sheet");
    }
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
