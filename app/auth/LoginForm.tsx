import { loginSchema } from "@/app/validationSchemas";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

type LoginFormData = z.infer<typeof loginSchema>;

interface Props {
  setAction: Dispatch<string>;
}

const LoginForm = ({ setAction }: Props) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <>
      <FormControl>
        <Input placeholder="Email Address" type="email" />
      </FormControl>
      <FormControl>
        <Input placeholder="Password" type="password" />
      </FormControl>
      <Button w="100%" colorScheme="blue" isLoading={isSubmitting}>
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
          <Button
            color="blue.400"
            variant="ghost"
            pl={1}
            pb={1}
            _hover={{ color: "blue.500" }}
            _active={{ bgColor: "none" }}
            onClick={() => setAction("SIGNUP")}
          >
            Sign up
          </Button>
        </Text>
      </Box>
    </>
  );
};

export default LoginForm;
