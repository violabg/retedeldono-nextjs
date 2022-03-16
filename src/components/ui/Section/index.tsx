import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

interface Props extends FlexProps {}

export const Section = (props: Props) => {
	return (
		<Flex
			as="section"
			direction={"column"}
			// direction={{ base: "column", md: "row" }}
			position="relative"
			px={"15px"}
			h={"100vh"}
			{...props}
		/>
	);
};

export default Section;
