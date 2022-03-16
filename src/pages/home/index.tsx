import Head from "next/head";
import Link from "next/link";

import { Layout } from "@/components/layout";

// import { NodeArticleTeaser } from "src/components/node-article";

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-5 text-6xl font-black">Home:</h1>
      </div>
    </Layout>
  );
}
