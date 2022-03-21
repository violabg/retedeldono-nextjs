import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  useRadioGroup
} from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

import ProjectCard from "@/components/ui/ProjectCard";
import RadioCard from "@/components/ui/RadioCard";
import Section from "@/components/ui/Section";

type Props = {};

const Projects: React.FC<Props> = (props) => {
  // const [filteredWorks, setFilteredWorks] = useState<ProjectEntity[]>(
  //   projects!
  // );
  // const updateFilters = (value: string) => {
  //   // console.log(`value`, value);
  //   // console.log(`projects`, projects);
  //   if (value === "projects") {
  //     setFilteredWorks(projects!);
  //   } else {
  //     const temp =
  //       projects?.filter((item) => {
  //         return item.attributes?.service?.data?.id === value;
  //       }) ?? [];
  //     // console.log("temp :>> ", temp);
  //     setFilteredWorks(temp);
  //   }
  // };
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "projects",
    onChange: (nextValue: string) => {
      console.log("nextValue", nextValue);
      // updateFilters(nextValue);
    }
  });
  const group = getRootProps();
  return (
    <Section py={5} bg={"#F7F8F9"}>
      <Container maxW={"5xl"}>
        <Box py={5}>
          <HStack spacing={3} align={"center"}>
            <RadioCard {...getRadioProps({ value: "projects" })}>
              <MdContactPage size={18} style={{ marginRight: 3 }} />
              progetti
            </RadioCard>
            <RadioCard {...getRadioProps({ value: "fundraiser" })}>
              <IoIosPeople size={18} style={{ marginRight: 3 }} />
              fundraiser
            </RadioCard>
          </HStack>
          {/* <HStack spacing={3}>
            <Button variant={"solid-o"} textTransform={"uppercase"}>
              <MdContactPage size={18} style={{ marginRight: 3 }} />
              progetti
            </Button>
            <Button variant={"solid-o"} textTransform={"uppercase"}>
              <IoIosPeople size={18} style={{ marginRight: 3 }} />
              fundraiser
            </Button>
          </HStack> */}
        </Box>
        <Tabs>
          <TabList>
            <Tab
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={"#D8D8D8"}
              _active={{
                color: "brand.500"
              }}
            >
              attivi
            </Tab>
            <Tab
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={"#D8D8D8"}
              _active={{ color: "brand.500" }}
            >
              conclusi
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className={"tab-progress"}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {/* loop dei progetti */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </SimpleGrid>
            </TabPanel>
            <TabPanel className={"tab-done"}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {/* loop dei progetti */}
                <ProjectCard />
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};

export default Projects;
