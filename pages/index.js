import Layout from "components/Layout";
import CharactersList from "components/CharactersList";
import { getAllCharactersFromDb } from "pages/api/characters";

// Use to get character from database

export default function Home({ characters }) {
  console.log(characters);
  return (
    <div>
      <Layout title={Home}>
        <h1 className="text-xl font-bold">Characters</h1>
        <CharactersList characters={characters} />
      </Layout>
    </div>
  );
}

// On every request to this page :
export async function getServerSideProps() {
  // get the corresponding character from db
  const characters = await getAllCharactersFromDb();
  // Pass data to the page via props
  return {
    props: {
      characters,
    },
  };
}
