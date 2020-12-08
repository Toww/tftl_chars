import Image from "next/image";

// UI Components
import MainInfo from "components/charsheet/MainInfo";
import Attributes from "components/charsheet/Attributes";
import Conditions from "components/charsheet/Conditions";
import Skills from "components/charsheet/Skills";
import Experience from "components/charsheet/Experience";

const CharacterSheet = () => {
  return (
    <>
      {/* --- Page Header --- */}
      <header className="max-w-lg mx-auto mb-8">
        {/* TFTL LOGO */}
        <Image
          src="/img/tftl-logo.png"
          alt="Tales From The Loop logo"
          width={800}
          height={136}
        />
      </header>

      {/* --- Page Main Content --- */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* --- Left Column --- */}
        <div className="lg:col-span-1">
          <Attributes />
          <Conditions />
          <Skills />
          <Experience />
        </div>
        {/* --- Right Column --- */}
        <div className="lg:col-span-2">
          <MainInfo />
        </div>
      </main>
    </>
  );
};

export default CharacterSheet;
