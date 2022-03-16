import { Container } from "@chakra-ui/react";
import React from "react";

import { NavMenu } from "@/types";

import { NavContent } from "./NavContent";
import NavItem from "./NavItem";

type Props = {
  menu?: NavMenu;
  localePath?: string;
};

const Navbar: React.FC<Props> = (props) => {
  const { menu, localePath } = props;

  console.log("menu", menu);

  return (
    <Container maxW={"container.lg"}>
      <NavContent.Mobile menu={menu} display={{ base: "flex", md: "none" }} />
      <NavContent.Desktop menu={menu} display={{ base: "none", md: "flex" }} />
    </Container>
  );
};

export default Navbar;
