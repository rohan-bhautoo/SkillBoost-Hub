import {
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

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
              <LoginForm setAction={setAction} />
            ) : (
              <SignupForm setAction={setAction} />
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
