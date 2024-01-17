import prisma from "@/prisma/client";
import { SimpleGrid } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";

interface Props {
  fetchAll: boolean;
}

const CourseGrid = async ({ fetchAll }: Props) => {
  const courses =
    fetchAll == false
      ? await prisma.course.findMany({
          orderBy: { createdAt: "desc" },
          take: 8,
          include: {
            instructor: true,
          },
        })
      : await prisma.course.findMany({
          include: {
            instructor: true,
          },
        });

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 4, xl: 4 }}
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
  );
};

export default CourseGrid;
