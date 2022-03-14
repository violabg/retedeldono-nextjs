import * as React from "react";
import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Head from "next/head";
import {
  DrupalNode,
  getPathsFromContext,
  getResourceFromContext,
  getResourceTypeFromContext,
} from "next-drupal";

import { NodeArticle } from "@/components/node-article";
import { NodeBasicPage } from "@/components/node-basic-page";
import { Layout } from "@/components/layout";

interface NodePageProps {
  node: DrupalNode;
}

export default function NodePage({ node }: NodePageProps) {
  if (!node) return null;

  return (
    <Layout>
      <Head>
        <title>{node.title}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      {/* {node.type === "node--page" && <NodeBasicPage node={node} />}
      {node.type === "node--landing_page" && <NodeArticle node={node} />} */}
      <h1>{node.title}</h1>
    </Layout>
  );
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  console.log("context", context);
  const paths = await getPathsFromContext(["node--landing_page"], context);
  console.log("paths :>> ", paths[0]);
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  console.log("context", context);
  const type = await getResourceTypeFromContext(context);
  console.log("type", type);

  if (!type) {
    return {
      notFound: true,
    };
  }

  let params = {};
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    };
  }

  const node = await getResourceFromContext<DrupalNode>(type, context, {
    params,
  });

  console.log("node", node);

  if (!node?.status) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      node,
    },
    revalidate: 900,
  };
}
