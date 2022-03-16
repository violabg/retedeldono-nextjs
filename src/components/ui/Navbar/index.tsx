import { NavMenu } from "@/types";
import Link from "next/link";
import { Container, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";
import { SearchIcon } from "@chakra-ui/icons";
import { NavContent } from "./NavContent";

type Props = {
	menu?: NavMenu;
	localePath?: string;
};

const Navbar: React.FC<Props> = props => {
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
