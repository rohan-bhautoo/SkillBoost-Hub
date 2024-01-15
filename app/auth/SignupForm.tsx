import { signupSchema } from "@/app/validationSchemas";
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import useAuthActionStore from "../stores/useAuthActionStore";

type SignupFormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const setAuthAction = useAuthActionStore((s) => s.setAction);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const password = watch("password", "");
  const [passwordMatch, setPasswordMatch] = useState("");

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
      <form className="space-y-5" onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.firstName}>
          <Input
            placeholder="First Name"
            type="text"
            {...register("firstName")}
          />
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.lastName}>
          <Input
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
          />
          <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
        </FormControl>
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
        <FormControl isInvalid={password !== passwordMatch}>
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setPasswordMatch(e.target.value)}
          />
          <FormErrorMessage>Passwords do not match!</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          w="100%"
          isLoading={isSubmitting}
          colorScheme="blue"
        >
          Sign up
        </Button>
        <Divider />
      </form>
      <Box textAlign="center">
        <Text>
          Already have an account?{" "}
          <Button
            color="blue.400"
            variant="ghost"
            pl={1}
            pb={1}
            _hover={{ color: "blue.500" }}
            _active={{ bgColor: "none" }}
            onClick={() => {
              setAuthAction("LOGIN");
            }}
          >
            Log in
          </Button>
        </Text>
      </Box>
    </div>
  );
};

export default SignupForm;
