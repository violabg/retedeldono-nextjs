import { data } from "data";
import { NextPage } from "next";
import Head from "next/head";

import About from "@/components/Home/About";
import Contacts from "@/components/Home/Contacts";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import { Layout } from "@/components/layout";
import { HomePageProps } from "@/types";

// import { NodeArticleTeaser } from "src/components/node-article";

interface Props {
  data?: HomePageProps;
}

const IndexPage: NextPage<Props> = (props) => {
  console.log("data-index", data);
  return (
    <Layout data={data}>
      <Head>
        <title>Rete del dono</title>
        <meta name="description" content="" />
      </Head>
      <Hero hero={data?.hero} />
      <Projects projects={data?.projects} />
      <About />
      <Contacts />
    </Layout>
  );
};

export default IndexPage;
