import prisma from "@/prisma/client";
import {
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";

const CourseGrid = async () => {
  const courses = await prisma.course.findMany({
    orderBy: { createdAt: "desc" },
    take: 8,
    include: {
      instructor: true,
    },
  });

  return (
    <Container maxW="100%" p={0} mt={10}>
      <Flex justify="space-between" mb={2}>
        <Heading as="h2" size="lg">
          Courses
        </Heading>
        <Button variant="ghost">View All</Button>
      </Flex>
      <Divider />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 4, xl: 4 }}
        my={5}
        spacing={4}
      >
        {courses.map((course) => (
          <CourseCardContainer key={course.id}>
            <CourseCard course={course} instructor={course.instructor} />
          </CourseCardContainer>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CourseGrid;
