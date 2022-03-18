import { Box, Flex, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react";

import NextImage from "../NextImage";

type Props = {};

const Card: React.FC<Props> = (props) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NextImage
        width={300}
        height={150}
        layout={"responsive"}
        src={"/img/card-image.png"}
        alt={""}
        objectFit={"cover"}
      />
      <Flex
        direction={"column"}
        align="space-between"
        justify={"space-between"}
        py={5}
        px={3}
        minH={120}
      >
        <Heading as={"h4"} fontSize={"20px"}>
          Lotta contro i tumori
        </Heading>
        <Box>
          <Text fontSize={"13px"}>
            <strong style={{ color: "#ED7225", fontSize: "14px" }}>
              € {"27.881"}
            </strong>{" "}
            raccolti di <span>€{"35.000"}</span>
          </Text>
          <Progress
            colorScheme="orange"
            size="sm"
            value={20}
            borderRadius={10}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
