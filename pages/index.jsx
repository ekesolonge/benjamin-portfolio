import Head from "next/head";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Benjamin Ogunbola</title>
      </Head>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
    </Layout>
  );
}
