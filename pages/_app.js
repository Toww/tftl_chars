import "styles/main.css";
import Link from "next/link";
import Image from "next/image";

// Context Providers
import AttributesContextProvider from "contexts/AttributesContext";
import ConditionsContextProvider from "contexts/ConditionsContext";
import SkillsContextProvider from "contexts/SkillsContext";
import ExperienceContextProvider from "contexts/ExperienceContext";
import MainInfoContextProvider from "contexts/MainInfoContext";
import RelationshipsContextProvider from "contexts/RelationshipsContext";
import ItemsContextProvider from "contexts/ItemsContext";
import HideoutContextProvider from "contexts/HideoutContext";
import NotesContextProvider from "contexts/NotesContext";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto my-8 px-4">
      {/* --- Page Header --- */}
      <header className="max-w-lg mx-auto mb-8">
        {/* TFTL LOGO */}
        <Link href="/">
          <a>
            <Image
              src="/img/tftl-logo.png"
              alt="Tales From The Loop logo"
              width={800}
              height={136}
            />
          </a>
        </Link>
      </header>
      {/* Providing Context so that it can be used in the whole app */}
      <AttributesContextProvider>
        <ConditionsContextProvider>
          <SkillsContextProvider>
            <ExperienceContextProvider>
              <MainInfoContextProvider>
                <RelationshipsContextProvider>
                  <ItemsContextProvider>
                    <HideoutContextProvider>
                      <NotesContextProvider>
                        <Component {...pageProps} />
                      </NotesContextProvider>
                    </HideoutContextProvider>
                  </ItemsContextProvider>
                </RelationshipsContextProvider>
              </MainInfoContextProvider>
            </ExperienceContextProvider>
          </SkillsContextProvider>
        </ConditionsContextProvider>
      </AttributesContextProvider>
    </div>
  );
}

export default MyApp;
