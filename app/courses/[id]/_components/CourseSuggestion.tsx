import CourseCard from "@/app/components/CourseCard";
import CourseCardContainer from "@/app/components/CourseCardContainer";
import prisma from "@/prisma/client";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Instructor } from "@prisma/client";

interface Props {
  courseId: number;
  instructor: Instructor;
}

const CourseSuggestion = async ({ courseId, instructor }: Props) => {
  const courses = await prisma.course.findMany({
    take: 3,
    where: {
      instructorId: instructor.id,
      id: {
        not: courseId,
      },
    },
    include: {
      instructor: true,
    },
  });

  return (
    <Card my={5}>
      <CardHeader pb={0}>
        <Heading size="md">
          More Courses by {instructor.firstName} {instructor.lastName}
        </Heading>
      </CardHeader>
      <CardBody>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
          my={5}
          padding="10px"
          spacing={6}
        >
          {courses.map((course) => (
            <CourseCardContainer key={course.id}>
              <CourseCard course={course} instructor={course.instructor} />
            </CourseCardContainer>
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
};

export default CourseSuggestion;
