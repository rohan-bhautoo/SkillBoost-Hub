"use client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Hide,
  IconButton,
  Image,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, useState } from "react";
import logo from "../assets/logo.png";
import AuthModal from "./AuthModal";
import CoursesDropdown from "./CoursesDropdown";
import ImageLink from "./ImageLink";
import SearchInput from "./SearchInput";

interface Props {
  display: string;
  changeDisplay: Dispatch<string>;
}

const NavBar = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <>
      <HStack padding="8px" gap={4}>
        <Hide below="md">
          <Logo />
          <ButtonGroup>
            <CoursesDropdown />
          </ButtonGroup>
        </Hide>
        <SearchInput />
        <Hide below="md">
          <NavActions display="none" />
        </Hide>
        <Show below="md">
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            borderRadius={15}
            onClick={() => changeDisplay("flex")}
          />
        </Show>
      </HStack>
      <Hide above="md">
        <HamburgerMenu display={display} changeDisplay={changeDisplay} />
      </Hide>
    </>
  );
};

const Logo = () => {
  return (
    <ImageLink href="/">
      <Image src={logo.src} maxW={"100px"} h="auto" objectFit="cover" />
    </ImageLink>
  );
};

const HamburgerMenu = ({ display, changeDisplay }: Props) => {
  return (
    <Flex
      w="100vw"
      display={display}
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
      bgColor="rgba(0,0,0,0.8)"
    >
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          bg="none"
          borderRadius={15}
          onClick={() => changeDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center" gap={4}>
        <Logo />
        <NavActions display={display} />
      </Flex>
    </Flex>
  );
};

const NavActions = ({ display }: { display: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [authAction, setAuthAction] = useState("");

  return (
    <>
      <ButtonGroup
        spacing="4"
        orientation={display === "none" ? "horizontal" : "vertical"}
      >
        <Button borderRadius={15}>Teach on SkillBoost</Button>
        <Button
          colorScheme="blue"
          borderRadius={15}
          onClick={() => {
            onOpen();
            setAuthAction("LOGIN");
          }}
        >
          Log in
        </Button>
        <Button
          colorScheme="blue"
          borderRadius={15}
          onClick={() => {
            onOpen();
            setAuthAction("SIGNUP");
          }}
        >
          Sign up
        </Button>
      </ButtonGroup>

      <AuthModal authAction={authAction} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NavBar;
