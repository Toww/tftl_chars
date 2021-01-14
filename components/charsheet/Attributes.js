import { useContext } from "react";
import StripedList from "components/charsheet/common/StripedList";
import { AttributesContext } from "contexts/AttributesContext";

const Attributes = () => {
      // Getting related states from context
  const { attributes, setAttributes } = useContext(AttributesContext);

  return (
    <StripedList
      title="attributes"
      listObject={attributes}
      setListObject={setAttributes}
    />
  );
};

export default Attributes;
