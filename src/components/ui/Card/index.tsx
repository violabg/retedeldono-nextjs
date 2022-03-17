import { AspectRatio, Badge, Box, Heading } from "@chakra-ui/react";
import React from "react";

import NextImage from "../NextImage";

type Props = {};

const Card: React.FC<Props> = (props) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NextImage
        width={200}
        height={100}
        layout={"responsive"}
        src={"/img/card-image.png"}
        alt={""}
      />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Heading as={"h4"}>Lotta contro i tumori</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
