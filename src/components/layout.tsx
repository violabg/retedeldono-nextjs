import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { PreviewAlert } from "./preview-alert";

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
        </Box>
      </Container>
    </>
  );
}
