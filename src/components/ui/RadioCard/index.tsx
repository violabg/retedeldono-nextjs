import { Box, useRadio, UseRadioProps } from "@chakra-ui/react";
import React from "react";

import { bg } from "@/theme";

type Props = UseRadioProps;

const RadioCard: React.FC<Props> = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label" display="inline-block">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize={"12px"}
        fontWeight={"bold"}
        cursor={"pointer"}
        color="white"
        borderRadius="full"
        display={"inline-flex"}
        justifyContent={"center"}
        alignContent={"center"}
        border="3px solid"
        borderColor={"#D8D8D8"}
        textTransform={"uppercase"}
        bg={"#D8D8D8"}
        transition={"all 0.3s ease-in-out"}
        _hover={{
          bg: "transparent",
          color: "brandOrange",
          textDecoration: "none",
          borderColor: "brandOrange"
        }}
        _checked={{
          borderColor: "brandOrange",
          bg: "brandOrange",
          color: "white"
        }}
        py={"10px"}
        px={"20px"}
        lineHeight={"19px"}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default RadioCard;
