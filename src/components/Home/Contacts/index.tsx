import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoSendSharp } from "react-icons/io5";

import Section from "@/components/ui/Section";

type Props = {};

const Contacts = (props) => {
  return (
    <Section>
      <Container maxW={"container.xl"}>
        <Box bg={"brand.500"} borderRadius={10} color={"white"} py={7} px={12}>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"space-between"}
          >
            <Box>
              <Text fontWeight={"bold"} fontSize={"2xl"}>
                Vuoi contattare l'ente?
              </Text>
              <Text>
                Lorem ipsum, dolor sit amet
                <br /> consectetur adipisicing elit.
              </Text>
            </Box>
            <Box pt={{ base: 3, md: 0 }}>
              <Button variant={"solid-w"} textTransform={"uppercase"}>
                invia un messaggio
                <IoSendSharp size={18} style={{ marginLeft: 3 }} />
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Section>
  );
};

export default Contacts;
