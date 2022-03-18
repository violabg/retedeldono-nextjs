import { Box, Flex, Heading, Progress, Text } from "@chakra-ui/react";
import React from "react";

import NextImage from "../NextImage";

type Props = {};

const Card: React.FC<Props> = (props) => {
  const val1 = 27881;
  const val2 = 35000;
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
              € {val1.toLocaleString()}
            </strong>{" "}
            raccolti di <span>€{val2.toLocaleString()}</span>
          </Text>
          <Progress
            colorScheme="orange"
            size="sm"
            value={(val1 / val2) * 100}
            borderRadius={10}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Card;
