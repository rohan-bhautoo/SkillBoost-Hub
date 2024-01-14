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

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    console.log(data);
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
      <form className="space-y-4" onSubmit={onSubmit}>
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
        <Divider />
        <Button w="100%" leftIcon={<FcGoogle />}>
          Continue with Google
        </Button>
        <Button w="100%" colorScheme="facebook" leftIcon={<FaFacebook />}>
          Continue with Facebook
        </Button>
        <Divider />
        <Box pb={4} textAlign="center">
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
      </form>
    </div>
  );
};

export default LoginForm;
