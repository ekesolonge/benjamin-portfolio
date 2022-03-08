import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Benjamin Ogunbola</title>
      </Head>
      <Hero />
      <About />
    </Layout>
  );
}
