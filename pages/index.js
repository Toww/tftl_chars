import Link from "next/link";
import Layout from "components/Layout";
import CharactersList from "components/CharactersList";
import { getAllCharactersFromDb } from "pages/api/characters";

// Use to get character from database
export default function Home({ characters }) {
  return (
    <div>
      <Layout title={Home}>
        <h1 className="text-xl font-bold">Characters</h1>
        <CharactersList characters={characters} />
        <Link href="/character/new">
            <a className="block mt-4 w-max bg-orange-400 text-white py-3 px-4 font-bold rounded-md">
              Create new character
            </a>
        </Link>
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
