import Layout from "components/Layout";
import CharacterSheet from "components/charsheet/CharacterSheet";

const newChar = () => {
  return (
    <Layout title="New Character">
      <h1 className="text-lg font-bold mb-4">New Character</h1>
      <CharacterSheet />
    </Layout>
  );
};

export default newChar;
