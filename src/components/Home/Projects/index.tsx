import { Container, SimpleGrid } from "@chakra-ui/react";
import base from "@emotion/styled/types/base";
import React from "react";

import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";

type Props = {};

const Projects: React.FC<Props> = (props) => {
  return (
    <Section py={5} bg={"#F7F8F9"}>
      <Container maxW={"4xl"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {/* loop dei progetti */}
          <Card />
          <Card />
          <Card />
        </SimpleGrid>
      </Container>
    </Section>
  );
};

export default Projects;
