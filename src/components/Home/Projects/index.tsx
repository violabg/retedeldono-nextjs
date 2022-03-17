import { Container, Flex } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import React from "react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type Props = {};

const Projects: React.FC<Props> = (props) => {
  return (
    <Section py={5}>
      <Container maxW={"3xl"}>
        <Flex
          direction={{ base: "row" }}
          justify={"space-around"}
          align={"flex-start"}
        >
          <Card />
          <Card />
          <Card />
        </Flex>
      </Container>
    </Section>
  );
};

export default Projects;
