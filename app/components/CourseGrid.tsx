import prisma from "@/prisma/client";
import { SimpleGrid } from "@chakra-ui/react";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";
import { Level } from "@prisma/client";

interface Props {
  levelParam?: Level;
  fetchAll: boolean;
}

const CourseGrid = async ({ fetchAll, levelParam }: Props) => {
  const levels = Object.values(Level);

  let where = {};

  if (typeof levelParam === "string") {
    // Single level selected
    where = { level: levelParam };
  } else if (Array.isArray(levelParam)) {
    // Multiple levels selected
    where = { level: { in: levelParam } };
  } else if (typeof levelParam === "object" && levelParam !== null) {
    // Object structure for multiple levels selected
    const selectedLevels = Object.values(levelParam);
    where = { level: { in: selectedLevels } };
  }

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
          where,
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
