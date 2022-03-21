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
import { BsQuestionCircle } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

import Section from "@/components/ui/Section";

type Props = {};

const About: React.FC<Props> = (props) => {
  return (
    <Section>
      <Container maxW={"5xl"}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={7}>
          <Box>
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
          <Box>
            <Box px={"80px"} py={5} bg={"brandOrange"} borderRadius={10}>
              <VStack spacing={4} textAlign={"center"} color={"white"}>
                <Text fontWeight={"bold"}>Vuoi fare di più?</Text>
                <Text>Anche tu puoi sostenere le campagne con iniziative</Text>
                <Button variant={"outline"} textTransform={"uppercase"}>
                  scopri di più{" "}
                  <BsQuestionCircle size={18} style={{ marginLeft: 3 }} />
                </Button>
                <Button variant={"solid-w"} textTransform={"uppercase"}>
                  inizia ora{" "}
                  <FiArrowRight size={18} style={{ marginLeft: 3 }} />
                </Button>
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
        <Divider orientation="horizontal" />
        <SimpleGrid columns={{ base: 1, md: 2 }} py={7} spacing={7}>
          <Box>
            <Text
              color={"brand.700"}
              textTransform={"uppercase"}
              fontWeight={"bold"}
            >
              Info & Bio
            </Text>
            <Box
              as={"img"}
              className="fancynavbar-brand-img"
              src="/img/logo.png"
              alt=""
              py={2}
              // width="200"
              height="100"
            />
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
    </Section>
  );
};

export default About;
