import NextImage from "@/components/ui/NextImage";
import { Section } from "@/components/ui/Section";
import { HeroProps } from "@/types";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
	data?: HeroProps;
};

const Hero: React.FC<Props> = props => {
	const { data } = props;
	return (
		<Section
			className="hero-section"
			mt={{ base: 70, md: 135 }}
			h={"55vh"}
			justify={"flex-end"}
		>
			{data && (
				<>
					{data?.image?.url ? (
						<NextImage
							src={data?.image?.url ?? ""}
							layout={"fill"}
							objectFit={"cover"}
						/>
					) : (
						<Box bg={"red"} w={"100vw"} pos={"absolute"} inset={0}></Box>
					)}
					<Heading as={"h1"} zIndex={10} color={"white"}>
						{data.title}
					</Heading>
				</>
			)}
		</Section>
	);
};

export default Hero;
