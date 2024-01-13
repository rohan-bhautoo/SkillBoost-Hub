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
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import logo from "../assets/logo.png";
import CustomLink from "./CustomLink";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
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
                Don't have an account? <CustomLink href="/" label="Sign up" />
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoginModal;
