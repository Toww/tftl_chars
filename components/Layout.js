import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Tales From The Loop - {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --- Page Header --- */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
