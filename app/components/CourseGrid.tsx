import prisma from "@/prisma/client";
import { SimpleGrid } from "@chakra-ui/react";
import CourseQuery from "../entities/CourseQuery";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";

interface Props {
  searchParam?: CourseQuery;
  fetchAll: boolean;
}

const CourseGrid = async ({ fetchAll, searchParam }: Props) => {
  let where = {};

  if (typeof searchParam?.level === "string") {
    // Single level selected
    where = { level: searchParam?.level };
  } else if (Array.isArray(searchParam?.level)) {
    // Multiple levels selected
    where = { level: { in: searchParam?.level } };
  } else if (
    typeof searchParam?.level === "object" &&
    searchParam?.level !== null
  ) {
    // Object structure for multiple levels selected
    const selectedLevels = Object.values(searchParam?.level);
    where = { level: { in: selectedLevels } };
  }

  if (searchParam?.categoryId)
    where = {
      ...where,
      categoryId: parseInt(searchParam.categoryId.toString()),
    };

  if (searchParam?.rating)
    where = {
      ...where,
      reviewRating: { gte: parseFloat(searchParam.rating.toString()) },
    };

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
