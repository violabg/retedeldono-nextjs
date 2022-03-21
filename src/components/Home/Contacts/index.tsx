import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IoSendSharp } from "react-icons/io5";

type Props = {};

const Contacts = (props) => {
  return (
    <Box py={10}>
      <Container maxW={"5xl"}>
        <Box bg={"brand.500"} borderRadius={10} color={"white"} py={7} px={12}>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={"center"}
            justify={"space-between"}
          >
            <Box>
              <Text fontWeight={"bold"}>Vuoi contattare l'ente?</Text>
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
    </Box>
  );
};

export default Contacts;
