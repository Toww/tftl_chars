import Head from "next/head";

// Components
import CharacterSheet from "components/charsheet/CharacterSheet";

// Providers
import AttributesContextProvider from "contexts/AttributesContext";
import ConditionsContextProvider from "contexts/ConditionsContext";
import SkillsContextProvider from "contexts/SkillsContext";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tales From The Loop Characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AttributesContextProvider>
          <ConditionsContextProvider>
            <SkillsContextProvider>
              <CharacterSheet />
            </SkillsContextProvider>
          </ConditionsContextProvider>
        </AttributesContextProvider>
      </main>
    </div>
  );
}
