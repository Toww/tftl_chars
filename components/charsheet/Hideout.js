import { useContext, memo } from "react";
import { HideoutContext } from "contexts/HideoutContext";

const Hideout = () => {
  // Preparing context
  const { hideout, setHideout } = useContext(HideoutContext);

  return (
    <div className="info-block flex flex-col mb-0">
      <h1 className="block-title">Hideout - {Math.random()}</h1>
      <div className="h-full px-4 pt-2 pb-4 bg-orange-50  border-b border-l border-r border-gray-300">
        <textarea
          rows="5"
          maxLength="360"
          className="ruled-textarea"
          value={hideout}
          onChange={(e) => setHideout(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default memo(Hideout);
