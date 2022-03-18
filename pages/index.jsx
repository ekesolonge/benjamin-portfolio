import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Benjamin Ogunbola's Portfolio"
        description="Insights into the brain of Benjamin"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://benjamin-portfolio.com",
          title: "Benjamin Ogunbola's Portfolio",
          description: "Insights into the brain of Benjamin",
          site_name: "Benjamin Ogunbola's Portfolio",
        }}
        twitter={{
          handle: "@oba_inspires",
          site: "@oba_inspires",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Hero data-aos="fade-right" />
        <About data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Testimonials data-aos="fade-up" />
        <Contact data-aos="fade-up" />
      </Layout>
    </>
  );
}
