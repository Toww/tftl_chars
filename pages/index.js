import Head from "next/head";
import Layout from "components/Layout";

// Use to get character from database

export default function Home({ character }) {
  return (
    <div>
      <Layout title={Home}>
        <div>Homepage</div>
      </Layout>
    </div>
  );
}
