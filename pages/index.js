import Head from "next/head";
import CharacterSheet from "components/charsheet/CharacterSheet";

// Use to get character from database
import { getCharFromDb } from "pages/api/character/[id]";

export default function Home({ character }) {
  return (
    <div>
      <Head>
        <title>Tales From The Loop Characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CharacterSheet character={character} />
      </main>
    </div>
  );
}

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
