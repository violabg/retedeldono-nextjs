import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <Box>
      <Container maxW={"5xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }}>
          <Box p={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae eos quidem voluptatem id? Dicta enim pariatur, quibusdam
            nesciunt obcaecati voluptatibus necessitatibus distinctio, totam
            eius nam suscipit repellendus, voluptatem nihil?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Praesentium qui voluptate
            optio ab a voluptatem totam minima non quam eveniet iste, commodi
            sunt labore quo. Accusantium veniam illum fuga dolores. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Labore repudiandae eos
            quidem voluptatem id? Dicta enim pariatur, quibusdam nesciunt
            obcaecati voluptatibus necessitatibus distinctio, totam eius nam
            suscipit repellendus, voluptatem nihil?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Praesentium qui voluptate optio ab a
            voluptatem totam minima non quam eveniet iste, commodi sunt labore
            quo. Accusantium veniam illum fuga dolores.
          </Box>
          <Box p={3}>
            <Box px={"80px"} py={5} bg={"#ED7225"} borderRadius={10}>
              <VStack spacing={4} textAlign={"center"} color={"white"}>
                <Text fontWeight={"bold"}>Vuoi fare di più?</Text>
                <Text>Anche tu puoi sostenere le campagne con iniziative</Text>
                <Button variant={"outline"}>scopri di più</Button>
                <Button variant={"solid"}>inizia ora ⮕</Button>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
        <Divider orientation="horizontal" />
        <SimpleGrid columns={{ base: 1, md: 2 }} py={7}>
          <Box p={3}>
            <Text
              color={"brand.700"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Info & Bio
            </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repudiandae eos quidem voluptatem id? Dicta enim pariatur, quibusdam
            nesciunt obcaecati voluptatibus necessitatibus distinctio, totam
            eius nam suscipit repellendus, voluptatem nihil?Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </Box>
          <AspectRatio ratio={16 / 9}>
            <iframe
              title=""
              src="https://www.youtube.com/watch?v=CUwg_JoNHpo"
              allowFullScreen
            />
          </AspectRatio>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
