import { data } from "data";
import { GetStaticPropsResult } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  DrupalNode,
  getResourceCollectionFromContext,
  useMenu
} from "next-drupal";

import { Layout } from "@/components/layout";
import { HomePageProps } from "@/types";

// import { NodeArticleTeaser } from "src/components/node-article";

interface IndexPageProps {
  nodes: DrupalNode[];
  data: HomePageProps;
}

export default function IndexPage({ nodes }: IndexPageProps) {
  const { tree, items } = useMenu("header-menu");
  console.log("tree", tree);
  console.log("items", items);
  return (
    <Layout>
      <Head>
        <title>Rete del dono</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-5 text-6xl font-black">Landings:</h1>

        {nodes?.length ? (
          nodes.map((node) => {
            // console.log("node.path.alias :>> ", node.path.alias);
            if (!node.path.alias) return null;
            return (
              <div key={node.id}>
                {/* <NodeArticleTeaser node={node} /> */}
                <Link href={node.path.alias} passHref>
                  <a>{node.title}</a>
                </Link>

                <hr className="my-3" />
              </div>
            );
          })
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await getResourceCollectionFromContext<DrupalNode[]>(
    "node--landing_page",
    context,
    {
      params: {
        include: "field_image,uid",
        sort: "-created"
      }
    }
  );

  console.log("nodes :>> ", nodes[0]);

  return {
    props: {
      nodes,
      data // custom data
    },
    revalidate: 10
  };
}
