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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  Skeleton,
  useDisclosure,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import AuthModal from "../auth/AuthModal";
import useAuthActionStore from "../stores/useAuthActionStore";
import useNavBarDisplayStore from "../stores/useNavBarDisplayStore";
import ColorModeSwitch from "./ColorModeSwitch";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import CoursesDropdown from "./CoursesDropdown";

const NavBar = () => {
  const { status } = useSession();
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
        <ColorModeSwitch />
        <Hide below="md">
          <AuthStatus />
        </Hide>
        <Show below="md">
          {status === "unauthenticated" ? (
            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              borderRadius={15}
              onClick={() => setNavBarDisplay("flex")}
            />
          ) : (
            <AuthStatus />
          )}
        </Show>
      </HStack>
      <Hide above="md">
        <HamburgerMenu />
      </Hide>
    </>
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
      <Hide below="md">
        <NavActions />
      </Hide>
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
          <Show below="md">
            <MenuItem as={Button}>My Learnings</MenuItem>
            <MenuItem
              as={Button}
              borderRadius={15}
              aria-label="Favorites"
              variant="ghost"
            >
              Favorites
            </MenuItem>
            <MenuItem
              as={Button}
              borderRadius={15}
              aria-label="Notifications"
              variant="ghost"
            >
              Notifications
            </MenuItem>
            <MenuItem as={Button} borderRadius={15} variant="ghost">
              Cart
            </MenuItem>
          </Show>
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
    </ButtonGroup>
  );
};

export default NavBar;
