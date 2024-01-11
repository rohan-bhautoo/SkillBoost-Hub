"use client";
import {
  Avatar,
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
        <Image src={logo.src} boxSize={{ base: "60px", md: "70px" }} />
      </CustomLink>
      <Show above="lg">
        <CoursesDropdown />
      </Show>
      <SearchInput />
      <Menu>
        <MenuButton>
          <Avatar
            name="Rohan Bhautoo"
            src="https://avatars.githubusercontent.com/u/47154593?v=4"
            size="sm"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Log out</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default NavBar;
