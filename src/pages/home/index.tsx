import Head from "next/head";

import About from "@/components/Home/About";
import Contacts from "@/components/Home/Contacts";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import { Layout } from "@/components/layout";

// import { NodeArticleTeaser } from "src/components/node-article";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Rete del dono</title>
        <meta name="description" content="" />
      </Head>
      <Hero />
      <Projects />
      <About />
      <Contacts />
    </Layout>
  );
}
