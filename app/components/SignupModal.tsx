import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import CustomLink from "./CustomLink";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const SignupModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        alignContent="center"
        justifyContent="center"
        justifyItems="center"
        textAlign="center"
      >
        <Flex justify="center">
          <Image src={logo.src} maxW={"100px"} h="auto" objectFit="cover" />
        </Flex>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap={5}>
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
            <Button w="100%" onClick={onClose}>
              Close
            </Button>
            <Divider />
            <Box pb={4}>
              <Text>
                Already have an account? <CustomLink href="/" label="Log in" />
              </Text>
            </Box>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SignupModal;
