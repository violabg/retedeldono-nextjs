import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  Center,
  Container,
  Flex,
  Stack,
  StackDivider,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

import { NavMenu } from "@/types";

import NavItem from "../NavItem";
import { NavList } from "../NavList";

interface Props extends BoxProps {
  menu?: NavMenu;
  localePath?: string;
}

const MobileNavContent: React.FC<Props> = (props) => {
  const { menu } = props;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      key={1}
      className={"mobile-nav fancynavbar"}
      as={"nav"}
      bg={"#F7F8F9"}
      position={"fixed"}
      top={0}
      left={0}
      height={"auto"}
      width={"100vw"}
      dir={"row"}
      align={"center"}
      justify="space-between"
      py={2}
      px={4}
      zIndex={99}
      {...props}
    >
      <Center
        as="button"
        p="2"
        fontSize="2xl"
        color={"#28A8C4"}
        onClick={onToggle}
      >
        {isOpen ? <HiX /> : <HiOutlineMenu />}
      </Center>
      <NavList
        pos="absolute"
        insetX="0"
        bg="white"
        top="55px"
        px={"15px"}
        listStyleType={"none"}
        animate={isOpen ? "enter" : "exit"}
      >
        {menu?.items && (
          <Stack
            spacing="3"
            py={2}
            divider={<StackDivider borderColor="#bbb" />}
            textAlign={"center"}
          >
            {menu?.items.map((item) => {
              return <NavItem key={item?.id} item={item} />;
            })}
          </Stack>
        )}
      </NavList>
      {menu?.items ? (
        <Box
          key={1}
          as="a"
          className="fancynavbar-brand"
          href="#top"
          color="#28A8C4"
          py={{ base: 0, lg: "0.5rem" }}
          px="1rem"
        >
          <Box
            as={"img"}
            className="fancynavbar-brand-img"
            src="/img/logo.png"
            alt=""
            // width="200"
            height="55"
          />
        </Box>
      ) : (
        <Link key={1} href="/" passHref>
          <Box
            key={1}
            as="a"
            href="/"
            className="fancynavbar-brand"
            color="#28A8C4"
            py={{ base: 0, lg: "0.5rem" }}
            px="1rem"
          >
            <Box
              as={"img"}
              className="fancynavbar-brand-img"
              src="/img/logo.png"
              alt=""
              // width="200"
              height="55"
            />
          </Box>
        </Link>
      )}
      <Box as="button" onClick={() => console.log("search")} px={2}>
        <SearchIcon color={"#28A8C4"} fontWeight={600} />
      </Box>
    </Flex>
  );
};

const DesktopNavContent: React.FC<Props> = (props) => {
  const { menu } = props;

  return (
    <Flex
      key={1}
      className={"desktop-nav fancynavbar"}
      as={"nav"}
      bg={"#F7F8F9"}
      position={"fixed"}
      top={0}
      left={0}
      height={"auto"}
      width={"100vw"}
      dir={"row"}
      align={"center"}
      justify="space-between"
      {...props}
    >
      <Container maxW={"5xl"}>
        {menu?.items ? (
          <Box
            key={1}
            as="a"
            className="fancynavbar-brand"
            href="#top"
            color="#28A8C4"
            py={{ base: 0, lg: "0.5rem" }}
            px="1rem"
          >
            <Box
              as={"img"}
              className="fancynavbar-brand-img"
              src="/img/logo.png"
              alt=""
              // width="200"
              height="120"
            />
          </Box>
        ) : (
          <Link key={1} href="/" passHref>
            <Box
              key={1}
              as="a"
              href="/"
              className="fancynavbar-brand"
              color="#28A8C4"
              py={{ base: 0, lg: "0.5rem" }}
              px="1rem"
            >
              <Box
                as={"img"}
                className="fancynavbar-brand-img"
                src="/img/logo.png"
                alt=""
                // width="200"
                height="120"
              />
            </Box>
          </Link>
        )}
        {menu?.items && (
          <Flex
            as={"ul"}
            className={"navbar-cont fancynavbar-nav"}
            align={"center"}
            justify={"center"}
            dir={"row"}
            pl={0}
            mb={0}
            // w="100%"
            listStyleType="none"
          >
            {menu?.items.map((item) => {
              return <NavItem key={item?.id} item={item} />;
            })}
            <Box as="button" onClick={() => console.log("search")} px={2}>
              <SearchIcon color={"#28A8C4"} fontWeight={600} />
            </Box>
          </Flex>
        )}
      </Container>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent
};
