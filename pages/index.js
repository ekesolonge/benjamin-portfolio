import Head from "next/head";
import { Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Benjamin Ogunbola</title>
      </Head>
      <Hero />
    </Layout>
  );
}
