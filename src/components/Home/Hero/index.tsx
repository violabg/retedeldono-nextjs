import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import { data } from "data";
import React from "react";

import HeroCard from "@/components/ui/HeroCard";
import NextImage from "@/components/ui/NextImage";
import { Section } from "@/components/ui/Section";
import { HeroProps } from "@/types";

type Props = {
  hero?: HeroProps;
};

const Hero: React.FC<Props> = ({ hero }) => {
  console.log("hero", hero);
  return (
    <Section className="hero-section" mt={{ base: 70, md: 135 }}>
      {hero?.image && (
        <Container className="container" maxW={"container.xl"} h={"full"}>
          {hero?.image?.url ? (
            <Flex direction={"row"} justify={"flex-end"} align={"flex-end"}>
              <NextImage
                src={hero?.image?.url ?? ""}
                layout={"fill"}
                objectFit={"cover"}
              />
              <HeroCard />
            </Flex>
          ) : (
            <Box bg={"red"} w={"100vw"} pos={"absolute"} inset={0}></Box>
          )}
          <Heading as={"h1"} zIndex={10} color={"white"} position={"relative"}>
            {hero?.title}
          </Heading>
        </Container>
      )}
    </Section>
  );
};

export default Hero;
