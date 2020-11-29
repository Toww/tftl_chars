import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-xl text-red-500">Hello Tailwind CSS!</div>
      </main>
    </div>
  );
}
