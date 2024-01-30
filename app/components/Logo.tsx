import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ImageLink from "./ImageLink";

const Logo = () => {
  return (
    <ImageLink href="/">
      <Image
        src={logo.src}
        maxW={"100px"}
        h="auto"
        objectFit="cover"
        alt="logo"
      />
    </ImageLink>
  );
};

export default Logo;
