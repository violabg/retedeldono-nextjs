export const Button = {
  baseStyle: {
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "0"
  },
  sizes: {
    md: {
      fontSize: "12px",
      p: "15px 20px",
      lineHeight: "19px"
    }
  },
  variants: {
    solid: {
      bg: "white",
      color: "#2d2d2d",
      borderRadius: "full",
      border: "3px solid white",
      _hover: {
        // bg: "#2d2d2d",
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
        color: "#2d2d2d",
        border: "3px solid white"
      }
    }
  },
  defaultProps: {
    variant: "solid"
  }
};
