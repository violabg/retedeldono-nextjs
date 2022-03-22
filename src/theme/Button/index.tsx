import { color } from "@chakra-ui/react";

export const Button = {
  baseStyle: {
    fontWeight: "700",
    // textTransform: "uppercase",
    borderRadius: "0"
  },
  sizes: {
    md: {
      fontSize: "12px",
      p: "15px 20px",
      lineHeight: "19px"
    },
    xl: {
      fontSize: "18px",
      p: "15px 38px",
      lineHeight: "19px"
    }
  },
  variants: {
    "solid-w": {
      bg: "white",
      color: "#044899",
      borderRadius: "full",
      border: "3px solid white",
      boxShadow: "0px 3px 4px 0px rgba(0,0,0,0.2)",
      _hover: {
        bg: "transparent",
        textDecoration: "none",
        color: "white",
        boxShadow: "none"
      }
    },
    "solid-o": {
      bg: "#ED7224",
      color: "white",
      borderRadius: "full",
      border: "3px solid #ED7224",
      _hover: {
        bg: "white",
        color: "#ED7224",
        textDecoration: "none"
      }
    },
    outline: {
      color: "white",
      bg: "transparent",
      borderRadius: "full",
      border: "3px solid white",
      _hover: {
        bg: "white",
        textDecoration: "none",
        color: "#044899",
        border: "3px solid white"
      }
    }
  },
  defaultProps: {
    variant: "solid"
  }
};
