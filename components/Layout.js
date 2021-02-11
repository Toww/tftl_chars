import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Tales From The Loop - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
      <main>{children}</main>
    </>
  );
};

export default Layout;
