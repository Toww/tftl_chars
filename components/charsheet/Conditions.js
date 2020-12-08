import { useContext } from "react";
import StripedList from "components/charsheet/common/StripedList";
import { ConditionsContext } from "contexts/ConditionsContext";

const Conditions = () => {
  // Getting related states from context
  const { conditions, setConditions } = useContext(ConditionsContext);

  return (
    <StripedList
      title="conditions"
      listObject={conditions}
      setListObject={setConditions}
    />
  );
};

export default Conditions;
