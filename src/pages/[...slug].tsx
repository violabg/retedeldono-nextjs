import { GetStaticPathsResult, GetStaticPropsResult } from "next";
import Head from "next/head";
import {
  DrupalNode,
  getPathsFromContext,
  getResource,
  getResourceFromContext,
  getResourceTypeFromContext
} from "next-drupal";
import * as React from "react";

import { Layout } from "@/components/layout";

interface NodePageProps {
  node: DrupalNode;
}

const NodePage = ({ node }: NodePageProps) => {
  // console.log("node :>> ", node);

  React.useEffect(() => {
    const getNode = async () => {
      const item = await getResource("node--landing_page", node.id);
      console.log("item :>> ", item);
    };
    getNode();
  }, [node.id]);

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
};

export default NodePage;

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  // console.log("context", context);
  const paths = await getPathsFromContext(["node--landing_page"], context);
  // console.log("paths :>> ", paths[0]);
  return {
    paths,
    fallback: "blocking"
  };
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  // console.log("context", context);
  const type = await getResourceTypeFromContext(context);
  // console.log("type", type);

  if (!type) {
    return {
      notFound: true
    };
  }

  let params = {};
  if (type === "node--article") {
    params = {
      include: "field_image,uid"
    };
  }

  const node = await getResourceFromContext<DrupalNode>(type, context, {
    params
  });

  console.log("node", node);

  if (!node?.status) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      node
    },
    revalidate: 900
  };
}
