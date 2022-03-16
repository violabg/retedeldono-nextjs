import { chakra } from "@chakra-ui/system";
import Image from "next/image";

const NextImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    [
      "src",
      "sizes",
      "width",
      "height",
      "layout",
      "loader",
      "quality",
      "priority",
      "loading",
      "lazyBoundary",
      "placeholder",
      "blurDataURL",
      "unoptimized",
      "objectFit",
      "objectPosition",
      "onLoadingComplete",
    ].includes(prop),
});

export default NextImage;
