import { Box } from "@chakra-ui/react";
import React from "react";

import { NavMenuItems } from "@/types";

interface Props {
  item?: NavMenuItems;
  isActive?: boolean;
}

const Navitem = (props: Props) => {
  const { item, isActive = false, ...rest } = props;

  return (
    <Box as={"li"} px={2}>
      {item && (
        <Box
          as={"a"}
          className="fancynav-link"
          href={item.url}
          display="inline-block"
          fontSize="1rem"
          textTransform="capitalize"
          position="relative"
          px={{ base: 3, lg: 10 }}
          color={"#28A8C4"}
          fontWeight={600}
        >
          {item.label}
        </Box>
      )}
    </Box>
  );
};

export default Navitem;
