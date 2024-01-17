import { Button, Container, Divider, Flex, Heading } from "@chakra-ui/react";
import CourseGrid from "./components/CourseGrid";
import MainGrid from "./components/MainGrid";
import ReviewGrid from "./components/ReviewGrid";

export default function Home() {
  return (
    <>
      <MainGrid />

      <Container maxW="100%" p={0} mt={10}>
        <Flex justify="space-between" mb={2}>
          <Heading as="h2" size="lg">
            Courses
          </Heading>
          <Button variant="ghost">View All</Button>
        </Flex>
        <Divider />
        <CourseGrid fetchAll={false} />
      </Container>

      <ReviewGrid />
    </>
  );
}
