"use client";
import { Button, ButtonGroup, HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import CoursesDropdown from "./CoursesDropdown";
import CustomLink from "./CustomLink";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="8px" gap={4}>
      <CustomLink href="/" label="">
        <Image src={logo.src} boxSize="120px" h="auto" objectFit="cover" />
      </CustomLink>
      <Show above="lg">
        <ButtonGroup>
          <CoursesDropdown />
        </ButtonGroup>
      </Show>
      <SearchInput />
      <ButtonGroup spacing="4">
        <Button bg="none" borderRadius={15} variant="outline">
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
