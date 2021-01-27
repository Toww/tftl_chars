import Head from "next/head";

// Components
import CharacterSheet from "components/charsheet/CharacterSheet";

// Providers
import AttributesContextProvider from "contexts/AttributesContext";
import ConditionsContextProvider from "contexts/ConditionsContext";
import SkillsContextProvider from "contexts/SkillsContext";
import ExperienceContextProvider from "contexts/ExperienceContext";
import MainInfoContextProvider from "contexts/MainInfoContext";
import RelationshipsContextProvider from "contexts/RelationshipsContext";
import ItemsContextProvider from "contexts/ItemsContext";
import HideoutContextProvider from "contexts/HideoutContext";
import NotesContextProvider from "contexts/NotesContext";

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
              <ExperienceContextProvider>
                <MainInfoContextProvider>
                  <RelationshipsContextProvider>
                    <ItemsContextProvider>
                      <HideoutContextProvider>
                        <NotesContextProvider>
                          <CharacterSheet />
                        </NotesContextProvider>
                      </HideoutContextProvider>
                    </ItemsContextProvider>
                  </RelationshipsContextProvider>
                </MainInfoContextProvider>
              </ExperienceContextProvider>
            </SkillsContextProvider>
          </ConditionsContextProvider>
        </AttributesContextProvider>
      </main>
    </div>
  );
}