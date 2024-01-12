"use client";
import {
  Avatar,
  Button,
  ButtonGroup,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import CustomLink from "./CustomLink";
import SearchInput from "./SearchInput";
import CoursesDropdown from "./CoursesDropdown";

const NavBar = () => {
  return (
    <HStack padding="8px" gap={4}>
      <CustomLink href="/" label="">
        <Image src={logo.src} boxSize="120px" h="auto" objectFit="cover" />
      </CustomLink>
      <Show above="lg">
        <CoursesDropdown />
      </Show>
      <SearchInput />
      <ButtonGroup spacing="4">
        <Button bg="none" borderRadius={15}>
          Teach on SkillBoost
        </Button>
        <Button colorScheme="blue" borderRadius={15}>
          Log in
        </Button>
        <Button borderRadius={15}>Sign up</Button>
      </ButtonGroup>
    </HStack>
  );
};

export default NavBar;
