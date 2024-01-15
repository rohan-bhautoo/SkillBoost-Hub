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
import logo from "../assets/logo.png";
import useAuthActionStore from "../stores/useAuthActionStore";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: Props) => {
  const authAction = useAuthActionStore((s) => s.authAction.action);

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
            {authAction === "LOGIN" ? <LoginForm /> : <SignupForm />}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
