import { color, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { Button } from "./Button";

const blackGradient = {
  0: "rgba(0, 0, 0, 0)",
  10: "rgba(0, 0, 0, 0.1)",
  20: "rgba(0, 0, 0, 0.2)",
  30: "rgba(0, 0, 0, 0.3)",
  40: "rgba(0, 0, 0, 0.4)",
  50: "rgba(0, 0, 0, 0.5)",
  60: "rgba(0, 0, 0, 0.6)",
  70: "rgba(0, 0, 0, 0.7)",
  80: "rgba(0, 0, 0, 0.8)",
  90: "rgba(0, 0, 0, 0.9)",
  100: "rgba(0, 0, 0, 1)"
};

const whiteGradient = {
  0: "rgba(255, 255, 255, 0)",
  10: "rgba(255, 255, 255, 0.1)",
  20: "rgba(255, 255, 255, 0.2)",
  30: "rgba(255, 255, 255, 0.3)",
  40: "rgba(255, 255, 255, 0.4)",
  50: "rgba(255, 255, 255, 0.5)",
  60: "rgba(255, 255, 255, 0.6)",
  70: "rgba(255, 255, 255, 0.7)",
  80: "rgba(255, 255, 255, 0.8)",
  90: "rgba(255, 255, 255, 0.9)",
  100: "rgba(255, 255, 255, 1)"
};

// console.log("_brand", _brand);
const brand = {
  50: "#D5F0FB",
  100: "#CBFEFA",
  200: "#98FDFD",
  300: "#64F0FB",
  400: "#3DDCF7",
  500: "#00BDF2",
  600: "#0093D0",
  700: "#006EAE",
  800: "#004E8C",
  900: "#003874"
};

export const bg = "#f6f6f6";
export const inputBg = "#292929";
export const black = "#000";
export const textColor = "#4a4a4a";
export const brandOrange = "#ED7224";

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "brand"
  }),
  {
    styles: {
      global: {
        ".js-focus-visible :focus:not(.focus-visible)": {
          outline: "none"
        },
        html: {
          scrollBehavior: "smooth"
        },
        // styles for the `body`
        body: {
          bg,
          color: "textColor",
          // fontFamily: "'Montserrat', sans-serif",
          fontWeight: 300
        },
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: 600
        },
        p: {},
        // styles for the `a`
        a: {
          color: "blue.500",
          _hover: {
            color: "brand.500"
          }
        }
      }
    },
    colors: {
      bg,
      inputBg,
      black,
      brand,
      blackGradient,
      whiteGradient,
      textColor,
      brandOrange
    },
    fonts: {},
    components: {
      Button
    }
  }
);

export default theme;

export type MyTheme = typeof theme;
