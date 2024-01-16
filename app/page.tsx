import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import onlineEducation from "./assets/onlineEducation.png";

export default function Home() {
  return (
    <Card
      align="center"
      m={5}
      mx={{ base: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
      px={10}
      direction={{ base: "column", sm: "row" }}
      variant="filled"
      background="linear-gradient(120deg, rgba(120, 188, 178, 0.5) 0%, rgba(255, 255, 255, 0) 30%, rgba(222, 200, 246, 0.5) 60%, rgba(105, 21, 195, 0) 120%)"
    >
      <CardBody>
        <Heading size="lg">Don't just watch. Do.</Heading>

        <Text py={2}>
          Try a course with low-poly exercises - now with a new look and more
          advanced learning features.
        </Text>

        <Button mt={10} variant="solid" colorScheme="blue">
          Explore Courses
        </Button>
      </CardBody>

      <Image src={onlineEducation.src} w={"50%"} h="auto" objectFit="cover" />
    </Card>
  );
}
