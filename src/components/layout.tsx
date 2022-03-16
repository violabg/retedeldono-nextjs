import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { PreviewAlert } from "./preview-alert";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

export function Layout({ children }) {
  return (
    <>
      <PreviewAlert />
      {/* <Container maxW={"3xl"}> */}
      <Box as="main">
        {children}
        <Navbar />
        <Footer />
      </Box>
      {/* </Container> */}
    </>
  );
}
