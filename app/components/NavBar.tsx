"use client";
import {
  Button,
  ButtonGroup,
  HStack,
  Hide,
  IconButton,
  Image,
  Show,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import CoursesDropdown from "./CoursesDropdown";
import CustomLink from "./CustomLink";
import SearchInput from "./SearchInput";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <HStack padding="8px" gap={4}>
      <CustomLink href="/" label="">
        <Image
          src={logo.src}
          maxW={{ base: "70px", md: "90px" }}
          h="auto"
          objectFit="cover"
        />
      </CustomLink>
      <Show above="md">
        <ButtonGroup>
          <CoursesDropdown />
        </ButtonGroup>
      </Show>
      <SearchInput />
      <Show above="md">
        <ButtonGroup spacing="4">
          <Button bg="none" borderRadius={15} variant="outline">
            Teach on SkillBoost
          </Button>
          <Button colorScheme="blue" borderRadius={15}>
            Log in
          </Button>
          <Button borderRadius={15}>Sign up</Button>
        </ButtonGroup>
      </Show>
      <Hide above="md">
        <IconButton
          aria-label="Open Menu"
          icon={<HamburgerIcon />}
          borderRadius={15}
        />
      </Hide>
    </HStack>
  );
};

export default NavBar;
