import { Box, Button, Container, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <Box>
      <Container maxW={"4xl"}>
        <Flex direction={{ base: "column", md: "row" }} align={"flex-start"}>
          <Box maxW={"50%"} p={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae eos quidem voluptatem id? Dicta enim pariatur, quibusdam
            nesciunt obcaecati voluptatibus necessitatibus distinctio, totam
            eius nam suscipit repellendus, voluptatem nihil?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Praesentium qui voluptate
            optio ab a voluptatem totam minima non quam eveniet iste, commodi
            sunt labore quo. Accusantium veniam illum fuga dolores.
          </Box>
          <Box maxW={"50%"} p={3}>
            <Box px={"80px"} py={3} bg={"#ED7225"} borderRadius={10}>
              <VStack spacing={4} textAlign={"center"} color={"white"}>
                <Text>Vuoi fare di più?</Text>
                <Text>Anche tu puoi sostenere le campagne con iniziative</Text>
                <Button variant={"outline"}>scopri di più</Button>
                <Button variant={"solid"}>inizia ora ⮕</Button>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
