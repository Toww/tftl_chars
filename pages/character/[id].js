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
export async function getServerSideProps() {
  // get the corresponding character from db
  const character = await getCharFromDb("601c3a1fbd74cddeccf9f1a7");
  // Pass data to the page via props
  return {
    props: {
      character,
    },
  };
}
