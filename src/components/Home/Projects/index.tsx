import { Container, HStack } from "@chakra-ui/react";
import React from "react";

import Card from "@/components/ui/Card";

type Props = {};

const Projects: React.FC<Props> = (props) => {
  return (
    <Container maxW={"3xl"}>
      <HStack spacing={2}>
        <Card />
        <Card />
        <Card />
      </HStack>
    </Container>
  );
};

export default Projects;
