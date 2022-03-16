import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { NavMenu } from "@/types";

import { PreviewAlert } from "../../preview-alert";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  menu?: NavMenu;
  localePath?: string;
};

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      <Flex
        as="header"
        align={"center"}
        justify={"center"}
        py={5}
        px={10}
        shadow="base"
      >
        <div className="container flex items-center justify-between py-6 mx-auto">
          <Link href="/" passHref>
            <a className="text-2xl font-semibold no-underline">RDD Next.js</a>
          </Link>
        </div>
      </Flex>
      <Container maxW={"3xl"}>
        <Box as="main" p={5}>
          {children}
          <Footer />
          <Navbar menu={menu} localePath={localePath} />
        </Box>
      </Container>
    </>
  );
}
