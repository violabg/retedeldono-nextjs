import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { HomePageProps } from "@/types";

import { PreviewAlert } from "./preview-alert";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

interface Props {
  data?: HomePageProps;
}

export const Layout: React.FC<Props> = ({ children, data }) => {
  console.log("data", data);
  return (
    <>
      <PreviewAlert />
      <Box as="main" pt="136px">
        <Navbar menu={data?.menu} />
        <Box className="content">{children}</Box>
        <Footer />
      </Box>
    </>
  );
};
