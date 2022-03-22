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

import { ProjectProps } from "@/types";

import NextImage from "../NextImage";

type Props = {
  project: ProjectProps;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  const progressValue = (project?.cur / project?.max) * 100 ?? 0;
  console.log("project", project);
  return (
    <LinkBox
      as="article"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      boxShadow={"0px 2px 1px 0px rgba(0,0,0,0.1)"}
    >
      <LinkOverlay href={project?.url ?? "#"}></LinkOverlay>
      <NextImage
        width={300}
        height={150}
        layout={"responsive"}
        src={project?.image?.url ?? ""}
        alt={project?.image?.alt ?? ""}
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
        <Heading as={"h4"} fontSize={"xl"}>
          {project?.title}
        </Heading>
        <Box>
          <Text fontSize={"13px"}>
            <strong style={{ color: "#ED7224", fontSize: "14px" }}>
              € {project?.cur.toLocaleString()}
            </strong>{" "}
            raccolti di <span>€{project?.max.toLocaleString()}</span>
          </Text>
          <Progress
            colorScheme="orange"
            bg={"#D8D8D8"}
            size="sm"
            value={progressValue}
            borderRadius={10}
          />
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default ProjectCard;
