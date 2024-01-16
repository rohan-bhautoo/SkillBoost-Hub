import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Hide,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import onlineEducation from "./assets/onlineEducation.png";

export default function Home() {
  return (
    <>
      <Card
        align="center"
        px={10}
        direction={{ base: "column", sm: "row" }}
        variant="filled"
        background="linear-gradient(120deg, rgba(120, 188, 178, 0.5) 0%, rgba(255, 255, 255, 0) 30%, rgba(222, 200, 246, 0.5) 60%, rgba(105, 21, 195, 0) 120%)"
      >
        <CardBody>
          <SimpleGrid columns={{ base: 2, sm: 1, md: 1, lg: 2, xl: 2 }}>
            <Center>
              <Box>
                <Heading as="h1" size="4xl">
                  Don't just watch. Do.
                </Heading>

                <Text fontSize="lg" py={2}>
                  Try a course with low-poly exercises - now with a new look and
                  more advanced learning features.
                </Text>

                <Button mt={10} variant="solid" colorScheme="blue">
                  Explore Courses
                </Button>
              </Box>
            </Center>

            <Hide below="lg">
              <Box>
                <Image
                  src={onlineEducation.src}
                  w="100%"
                  h="auto"
                  objectFit="cover"
                />
              </Box>
            </Hide>
          </SimpleGrid>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">Course Categories</Heading>
        </CardHeader>
      </Card>
    </>
  );
}
