import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

import NextImage from "@/components/ui/NextImage";
import { Section } from "@/components/ui/Section";
import { HeroProps } from "@/types";

type Props = {};

const Hero: React.FC<Props> = (props) => {
  return (
    <Section className="hero-section" mt={{ base: 70, md: 135 }}>
      <Box bg={"red"} w={"100vw"} h={"55vh"} p={5}>
        <Container className="container" maxW={"4xl"} h={"full"}>
          <Flex
            dir={"column"}
            align={"flex-end"}
            justify={"flex-start"}
            h={"full"}
          >
            <Heading as={"h1"} zIndex={10} color={"white"}>
              LILT Milano Monza Brianza
            </Heading>
          </Flex>
        </Container>
      </Box>
    </Section>
  );
};

export default Hero;
