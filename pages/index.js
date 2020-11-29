import Head from "next/head";
import CharacterSheet from "components/charsheet/CharacterSheet";
import AttributesContextProvider from "contexts/AttributesContext";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tales From The Loop Characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AttributesContextProvider>
          <CharacterSheet />
        </AttributesContextProvider>
      </main>
    </div>
  );
}
