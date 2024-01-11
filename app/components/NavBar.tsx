"use client";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import CustomLink from "./CustomLink";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px" gap={5}>
      <CustomLink href="/" label="">
        <Image src={logo.src} boxSize="80px" />
      </CustomLink>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon mt={1} />}
          bg="none"
          gap={4}
          borderRadius={20}
        >
          Courses
        </MenuButton>
        <MenuList>
          <SimpleGrid columns={4} p={5} gap={4}>
            <MenuGroup title="3D & Animation" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Blender
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="User Experience" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Figma
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Design Tools" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Auto CAD
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Graphic Design & Illustration" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Photoshop
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Photography & Video" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Digital Photography
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Architectural Design" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Sketch Up
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Web Design" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Website Design
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="Game Design" p={0}>
              <MenuItem fontSize={14} pl={4} borderRadius={10}>
                Unreal Engine
              </MenuItem>
            </MenuGroup>
          </SimpleGrid>
        </MenuList>
      </Menu>
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
