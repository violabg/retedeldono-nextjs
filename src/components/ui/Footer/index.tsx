import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Stack,
  StackDivider,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import NextImage from "../NextImage";

type Props = {};

const Footer: React.FC<Props> = (props) => {
  return (
    <Flex
      as={"footer"}
      bg={"#044899"}
      flexDir={"column"}
      align={"center"}
      justify={"center"}
      pos={"relative"}
      w={"100vw"}
      // p={"15px"}
    >
      <Container maxW={"3xl"} color={"white"} w={"full"}>
        <VStack
          spacing="3"
          py={2}
          divider={<StackDivider borderColor="#bbb" />}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="0"
            textAlign={"center"}
            align={"center"}
            justify={"space-around"}
            w={"full"}
          >
            <Box>
              <Link href={"#"}>Personal Fundraiser</Link>
            </Box>
            <Box>
              <Link href={"#"}>Organizazioni Non Profit</Link>
            </Box>
            <Box>
              <Link href={"#"}>Aziende</Link>
            </Box>
            <Box>
              <Link href={"#"}>Risorse</Link>
            </Box>
            <Box>
              <Link href={"#"}>Iniziative speciali</Link>
            </Box>
            <Box>
              <Link href={"#"}>Chi siamo</Link>
            </Box>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="2"
            textAlign={"center"}
            align={"center"}
            justify={"space-between"}
            w={"full"}
          >
            <NextImage src={"/img/footer-icons.png"} width={400} height={45} />
            <Flex
              direction={{ base: "column", md: "row" }}
              align="center"
              justify={"space-between"}
            >
              <Text>Seguici su</Text>
              <HStack color={"brand.500"} px={2}>
                <IconButton
                  as="a"
                  icon={<Icon as={FaInstagram} boxSize={5} />}
                  aria-label="instagram"
                  borderRadius="full"
                  href="#"
                  target="_blank"
                  size={"sm"}
                  variant="secondary"
                />
                <IconButton
                  as="a"
                  icon={<Icon as={FaFacebookF} boxSize={5} />}
                  aria-label="facebook"
                  borderRadius="full"
                  href="#"
                  target="_blank"
                  size={"sm"}
                  variant="secondary"
                />
                <IconButton
                  as="a"
                  icon={<Icon as={FaTwitter} boxSize={5} />}
                  aria-label="twitter"
                  borderRadius="full"
                  href="#"
                  target="_blank"
                  size={"sm"}
                  variant="secondary"
                />
                <IconButton
                  as="a"
                  icon={<Icon as={FaYoutube} boxSize={5} />}
                  aria-label="youtube"
                  borderRadius="full"
                  href="#"
                  target="_blank"
                  size={"sm"}
                  variant="secondary"
                />
                <IconButton
                  as="a"
                  icon={<Icon as={FaLinkedinIn} boxSize={5} />}
                  aria-label="linkedin"
                  borderRadius="full"
                  href="#"
                  target="_blank"
                  size={"sm"}
                  variant="secondary"
                />
              </HStack>
            </Flex>
          </Stack>
          <Box pt={10}>
            <Text>Termini e condizioni d'uso sulla Privacy</Text>
            <Text>Termini e condizioni d'uso sulla Privacy</Text>
            <Text>Termini e condizioni d'uso sulla Privacy</Text>
          </Box>
        </VStack>
      </Container>
    </Flex>
  );
};

export default Footer;
