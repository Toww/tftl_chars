import { useContext } from "react";
import { HideoutContext } from "contexts/HideoutContext";

const Hideout = () => {
  // Preparing context
  const { hideout, setHideout } = useContext(HideoutContext);

 
  return (
    <div className=" info-block flex flex-col mb-0">
      <h1 className="block-title">Hideout</h1>
      <div className="h-full px-4 pt-2 pb-4 bg-orange-50 border border-gray-300">
        <textarea rows="5" maxlength="360" className="ruled-textarea">Hello</textarea>
      </div>
    </div>
  );
};

export default Hideout;
