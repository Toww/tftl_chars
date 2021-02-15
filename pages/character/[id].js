import Layout from "components/Layout";
import { getCharFromDb } from "pages/api/character/[id]";
import CharacterSheet from "components/charsheet/CharacterSheet";

// Character details page
const Character = ({ character }) => {
  return (
    <div>
      <Layout title={`${character.mainInfo.name}`}>
        <CharacterSheet character={character} />
      </Layout>
    </div>
  );
};

export default Character;

// On every request to this page :
export async function getServerSideProps(context) {
  // Getting id slug from context
  const {
    params: { id },
  } = context;

  // get the corresponding character from db
  const character = await getCharFromDb(id);
  // Pass data to the page via props
  return {
    props: {
      character,
    },
  };
}
