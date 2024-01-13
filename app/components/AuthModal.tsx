import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png";

interface Props {
  authAction: string;
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ authAction, isOpen, onClose }: Props) => {
  const [action, setAction] = useState("");

  useEffect(() => {
    setAction(authAction);
  }, [authAction]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Flex justify="center">
          <Image src={logo.src} maxW={"100px"} h="auto" objectFit="cover" />
        </Flex>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap={5}>
            {action === "LOGIN" ? (
              <LoginBody setAction={setAction} />
            ) : (
              <SignUpBody setAction={setAction} />
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const SignUpBody = ({ setAction }: { setAction: Dispatch<string> }) => {
  return (
    <>
      <FormControl>
        <Input placeholder="First Name" type="text" />
      </FormControl>
      <FormControl>
        <Input placeholder="Last Name" type="text" />
      </FormControl>
      <FormControl>
        <Input placeholder="Email Address" type="email" />
      </FormControl>
      <FormControl>
        <Input placeholder="Password" type="password" />
      </FormControl>
      <FormControl>
        <Input placeholder="Confirm Password" type="password" />
      </FormControl>
      <Button w="100%" colorScheme="blue">
        Sign up
      </Button>
      <Divider />
      <Box pb={4}>
        <Text>
          Already have an account?{" "}
          <Link
            href="/"
            color="blue.400"
            _hover={{ color: "blue.500" }}
            onClick={() => {
              setAction("LOGIN");
            }}
          >
            Log in
          </Link>
        </Text>
      </Box>
    </>
  );
};

const LoginBody = ({ setAction }: { setAction: Dispatch<string> }) => {
  return (
    <>
      <FormControl>
        <Input placeholder="Email Address" type="email" />
      </FormControl>
      <FormControl>
        <Input placeholder="Password" type="password" />
      </FormControl>
      <Button w="100%" colorScheme="blue">
        Log in
      </Button>
      <Divider />
      <Button w="100%" leftIcon={<FcGoogle />}>
        Continue with Google
      </Button>
      <Button w="100%" colorScheme="facebook" leftIcon={<FaFacebook />}>
        Continue with Facebook
      </Button>
      <Divider />
      <Box pb={4}>
        <Text>
          Don't have an account?{" "}
          <Link
            href="/"
            color="blue.400"
            _hover={{ color: "blue.500" }}
            onClick={() => setAction("SIGNUP")}
          >
            Sign up
          </Link>
        </Text>
      </Box>
    </>
  );
};

export default AuthModal;
