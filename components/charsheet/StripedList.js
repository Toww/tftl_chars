import LineWithBox from "./LineWithBox";

const StripedList = ({ title, listObject }) => {
  return (
    <div className="info-block">
      <h1>{title}</h1>

      <ul className="c-list c-striped">
        {listObject.map((attr) => (
          <LineWithBox title={attr.title} type={attr.type} value={attr.value} />
        ))}
      </ul>
    </div>
  );
};

export default StripedList;
