"use client";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Hide,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineLogout } from "react-icons/md";
import logo from "../assets/logo.png";
import AuthModal from "../auth/AuthModal";
import useAuthActionStore from "../stores/useAuthActionStore";
import useNavBarDisplayStore from "../stores/useNavBarDisplayStore";
import ColorModeSwitch from "./ColorModeSwitch";
import CoursesDropdown from "./CoursesDropdown";
import ImageLink from "./ImageLink";
import SearchInput from "./SearchInput";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

const NavBar = () => {
  const setNavBarDisplay = useNavBarDisplayStore((s) => s.setNavBarDisplay);

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
          <AuthStatus />
        </Hide>
        <Show below="md">
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            borderRadius={15}
            onClick={() => setNavBarDisplay("flex")}
          />
        </Show>
      </HStack>
      <Hide above="md">
        <HamburgerMenu />
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

const HamburgerMenu = () => {
  const navBarDisplay = useNavBarDisplayStore((s) => s.navBarDisplay);
  const setNavBarDisplay = useNavBarDisplayStore((s) => s.setNavBarDisplay);

  return (
    <Flex
      w="100vw"
      display={navBarDisplay.display}
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
          onClick={() => setNavBarDisplay("none")}
        />
      </Flex>

      <Flex flexDir="column" align="center" gap={4}>
        <Logo />
        <AuthStatus />
      </Flex>
    </Flex>
  );
};

const NavAuthActions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navBarDisplay = useNavBarDisplayStore((s) => s.navBarDisplay);
  const setAuthAction = useAuthActionStore((s) => s.setAction);

  return (
    <>
      <ButtonGroup
        spacing="4"
        orientation={
          navBarDisplay.display === "none" ? "horizontal" : "vertical"
        }
      >
        <ColorModeSwitch />
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

      <AuthModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading") return <Skeleton />;

  if (status === "unauthenticated") return <NavAuthActions />;

  return (
    <>
      <NavActions />
      <Menu>
        <MenuButton>
          <Avatar
            name={session!.user!.name!}
            src={session!.user!.image!}
            size="sm"
            className="cursor-pointer"
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            as={Button}
            onClick={() => signOut()}
            rightIcon={<Icon as={MdOutlineLogout} mt={1} />}
          >
            Log out
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

const NavActions = () => {
  return (
    <ButtonGroup>
      <Button variant="ghost" borderRadius={15}>
        My Learnings
      </Button>
      <IconButton
        borderRadius={15}
        aria-label="Favorites"
        icon={<FaHeart />}
        variant="ghost"
      />
      <IconButton
        borderRadius={15}
        aria-label="Notifications"
        icon={<IoMdNotifications />}
        fontSize={22}
        variant="ghost"
      />
      <IconButton
        borderRadius={15}
        aria-label="Cart"
        icon={<FaShoppingCart />}
        variant="ghost"
      />
      <ColorModeSwitch />
    </ButtonGroup>
  );
};

export default NavBar;
