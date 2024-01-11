"use client";
import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import CustomLink from "./CustomLink";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <CustomLink href="/" label="">
        <Image src={logo.src} boxSize="80px" />
      </CustomLink>
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
