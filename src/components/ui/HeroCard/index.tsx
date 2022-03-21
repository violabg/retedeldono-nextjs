import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MdContactPage } from "react-icons/md";

import NextImage from "../NextImage";

type Props = {};

const HeroCard: React.FC<Props> = (props) => {
  const nProgect = 2;
  return (
    <Box
      as="article"
      maxW="md"
      overflow="hidden"
      bg={"white"}
      p={8}
      w={"full"}
      mb={"-25px"}
      boxShadow={"0px 1px 4px 0px #B0B0B0"}
      zIndex={2}
      display={{ base: "none", md: "block" }}
    >
      <VStack spacing={3}>
        <Box>
          <NextImage src={"/img/hand.png"} width={120} height={90} />
        </Box>
        <Text color={"brandOrange"} fontWeight={"bold"} fontSize={"35px"}>
          € 587.911
        </Text>
        <Box>
          <NextImage src={"/img/face.png"} width={120} height={80} />
        </Box>
        <Text color={"brand.600"} fontWeight={"600"} fontSize={"20px"}>
          Donatori
        </Text>
        <Text color={"brandOrange"} fontWeight={"bold"} fontSize={"35px"}>
          16043
        </Text>
        <Button variant="solid-o" size={"xl"}>
          <MdContactPage size={18} style={{ marginRight: 3 }} />
          {nProgect} progetti attivi
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroCard;
