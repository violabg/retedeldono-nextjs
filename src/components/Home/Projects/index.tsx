import { Container, Flex } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import React from "react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type Props = {};

const Projects: React.FC<Props> = (props) => {
  return (
    <Section py={5} bg={"#F7F8F9"}>
      <Container maxW={"4xl"}>
        <Flex
          direction={{ base: "row" }}
          justify={"space-around"}
          align={"flex-start"}
        >
          {/* loop dei progetti */}
          <Card />
          <Card />
          <Card />
        </Flex>
      </Container>
    </Section>
  );
};

export default Projects;
