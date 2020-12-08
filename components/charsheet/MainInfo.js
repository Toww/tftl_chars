import { useContext } from "react";
import { MainInfoContext } from "contexts/MainInfoContext";
import InlineInput from "./common/InlineInput";

const MainInfo = () => {
  //Get everything from context
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

  return (
    <div className="info-block grid grid-cols-2 bg-gray-300 border border-gray-300 gap-px">
      <InlineInput colSpan="1" title="Name" relState={name} relStateSetter={setName} />
      <InlineInput colSpan="1" title="Type" relState={type} relStateSetter={setType} />
      <InlineInput colSpan="1" title="Age" relState={age} relStateSetter={setAge} />
      <InlineInput colSpan="1" title="Luck Points" relState={luckPoints} relStateSetter={setLuckPoints} />
      <InlineInput colSpan="1" title="Drive" relState={drive} relStateSetter={setDrive} />
      <InlineInput colSpan="1" title="Anchor" relState={anchor} relStateSetter={setAnchor} />
      <InlineInput colSpan="2" title="Problem" relState={problem} relStateSetter={setProblem} />
      <InlineInput colSpan="2" title="Pride" relState={pride} relStateSetter={setPride} />
      <InlineInput colSpan="2" title="Description" relState={description} relStateSetter={setDescription} />
      <InlineInput colSpan="2" title="Favorite song" relState={favSong} relStateSetter={setFavSong} />
    </div>
  );
};

export default MainInfo;
