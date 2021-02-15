import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
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
    } else {
      // If no character was passed as props, set every context back to default value.
      // (in case another character sheet was opened before and context was set)
      setAttributes([
        { title: "Body", type: "body", value: 0 },
        { title: "Tech", type: "tech", value: 0 },
        { title: "Heart", type: "heart", value: 0 },
        { title: "Mind", type: "mind", value: 0 },
      ]);
      setConditions([
        { title: "Upset", type: "upset", value: 0 },
        { title: "Scared", type: "scared", value: 0 },
        { title: "Exhausted", type: "exhausted", value: 0 },
        { title: "Injured", type: "injured", value: 0 },
        { title: "Broken", type: "broken", value: 0 },
      ]);
      setSkills([
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
      setExperience([
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
      setRelationships([
        { title: "Kid 1", value: "" },
        { title: "Kid 2", value: "" },
        { title: "Kid 3", value: "" },
        { title: "Kid 4", value: "" },
        { title: "NPC 1", value: "" },
        { title: "NPC 2", value: "" },
      ]);
      setItems([
        { title: "", bonus: "+2" },
        { title: "", bonus: "" },
        { title: "", bonus: "" },
        { title: "", bonus: "" },
        { title: "", bonus: "" },
        { title: "", bonus: "" },
      ]);
      setHideout("");
      setNotes("");
      setName("");
      setType("");
      setAge("");
      setLuckPoints([false, false, false, false, false]);
      setDrive("");
      setAnchor("");
      setProblem("");
      setPride({ text: "", checked: false });
      setDescription("");
      setFavSong("");
    }
  }, []);

  // Preparing the router for redirection to homepage after data submission
  const router = useRouter();
  // Submitting the character sheet form
  const handleSubmit = async () => {
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
      // Comparing the two objects using lodash to see if any modification
      // was made on the character sheet since it was loaded from db.
      const charValuesChanged = !_.isEqual(character, charNewInfo);

      // if the character sheet was modified, we update it in db and go back to homepage.
      // Else log an error message.
      if (charValuesChanged) {
        await fetch(`/api/character/${character._id}`, {
          method: "PUT",
          body: JSON.stringify(charNewInfo),
          headers: { "Content-Type": "application/json" },
        });
        // After character is updated in database, redirect to homepage
        router.push("/");
      } else {
        console.log("No modifications were made to the character sheet");
      }
    } else {
      // If no character was passed as a prop,
      // create new character in database
      await fetch("/api/characters/", {
        method: "POST",
        body: JSON.stringify(charNewInfo),
        headers: { "Content-Type": "application/json" },
      });
      // After character is added to database, redirect to homepage
      router.push("/");
    }
  };

  const handleDelete = async () => {
    // Deleting character sheet in db
    await fetch(`/api/character/${character._id}`, {
      method: "DELETE",
    });
    // After character is deleted in db, redirect to homepage
    router.push("/");
  };

  return (
    <>
      {/* --- Page Main Content --- */}
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
      {/* Submit button (update / create character) */}
      <button
        className="bg-orange-400 text-white px-5 rounded-md py-3 font-bold"
        onClick={handleSubmit}
      >
        {character ? "Update Character" : "Create Character"}
      </button>
      {/* Delete button */}
      {character && (
        <button
          onClick={handleDelete}
          className="ml-2 bg-red-500 text-white rounded-md py-3 px-5 font-bold"
        >
          Delete character
        </button>
      )}
    </>
  );
};

export default CharacterSheet;
