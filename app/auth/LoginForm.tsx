import { loginSchema } from "@/app/validationSchemas";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
import useAuthActionStore from "../stores/useAuthActionStore";
import { signIn } from "next-auth/react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const setAuthAction = useAuthActionStore((s) => s.setAction);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      signIn("credentials", { email: data.email, password: data.password });
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred.");
    }
  });

  return (
    <div className="w-full">
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form className="space-y-5" onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.email}>
          <Input
            placeholder="Email Address"
            type="email"
            {...register("email")}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          w="100%"
          colorScheme="blue"
          isLoading={isSubmitting}
        >
          Log in
        </Button>
        <HStack>
          <Divider />
          <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
            or
          </Text>
          <Divider />
        </HStack>
        <OAuthButtonGroup />
      </form>
      <Box textAlign="center" mt={4}>
        <Text>
          Don't have an account?{" "}
          <Button
            color="blue.400"
            variant="ghost"
            pl={1}
            pb={1}
            _hover={{ color: "blue.500" }}
            _active={{ bgColor: "none" }}
            onClick={() => setAuthAction("SIGNUP")}
          >
            Sign up
          </Button>
        </Text>
      </Box>
    </div>
  );
};

export default LoginForm;
