import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  useRadioGroup
} from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

import { MotionBoxT, MotionSimpleGrid } from "@/components/ui/motion";
import ProjectCard from "@/components/ui/ProjectCard";
import RadioCard from "@/components/ui/RadioCard";
import Section from "@/components/ui/Section";
import { ProjectProps } from "@/types";

type Props = {
  projects: ProjectProps[];
};

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
  const { projects } = props;
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "projects",
    onChange: (nextValue: string) => {
      console.log("nextValue", nextValue);
      // updateFilters(nextValue);
    }
  });
  const group = getRootProps();
  console.log("projects", projects);
  return (
    <Section>
      <Container maxW={"container.xl"}>
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
              <MotionSimpleGrid
                id="project-wrap"
                // minChildWidth="120px"
                spacing={4}
                w="full"
                layoutId="portfolio-layout"
                columns={{ base: 1, sm: 2, md: 3 }}
              >
                {/* loop dei progetti */}
                <AnimatePresence>
                  {projects.map((project) => {
                    return <ProjectCard key={project.id} project={project} />;
                  })}
                </AnimatePresence>
              </MotionSimpleGrid>
            </TabPanel>
            <TabPanel className={"tab-done"}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {/* loop dei progetti */}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Section>
  );
};

export default Projects;
