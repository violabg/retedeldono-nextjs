import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Progress,
  Text
} from "@chakra-ui/react";
import React from "react";

import NextImage from "../NextImage";

type Props = {};

const ProjectCard: React.FC<Props> = (props) => {
  const val1 = 27881;
  const val2 = 35000;
  return (
    <LinkBox
      as="article"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
    >
      <LinkOverlay href="#"></LinkOverlay>
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
            <strong style={{ color: "brandOrange", fontSize: "14px" }}>
              € {val1.toLocaleString()}
            </strong>{" "}
            raccolti di <span>€{val2.toLocaleString()}</span>
          </Text>
          <Progress
            colorScheme="orange"
            // bg={"brandOrange"}
            size="sm"
            value={(val1 / val2) * 100}
            borderRadius={10}
          />
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default ProjectCard;
