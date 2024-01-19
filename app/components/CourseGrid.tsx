import prisma from "@/prisma/client";
import { SimpleGrid } from "@chakra-ui/react";
import CourseQuery from "../entities/CourseQuery";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";
import { Level } from "@prisma/client";

interface Props {
  searchParams?: CourseQuery;
  fetchAll: boolean;
}

const CourseGrid = async ({ fetchAll, searchParams }: Props) => {
  const levels = Object.values(Level);

  const level = searchParams
    ? levels.includes(searchParams!.level)
      ? searchParams?.level
      : undefined
    : undefined;

  let where = {};

  if (typeof level === "string") {
    // Single level selected
    where = { level };
  } else if (Array.isArray(level)) {
    // Multiple levels selected
    where = { level: { in: level } };
  } else if (typeof level === "object" && level !== null) {
    // Object structure for multiple levels selected
    const selectedLevels = Object.values(level);
    where = { level: { in: selectedLevels } };
  }

  if (searchParams?.categoryId)
    where = {
      ...where,
      categoryId: parseInt(searchParams.categoryId.toString()),
    };

  if (searchParams?.rating)
    where = {
      ...where,
      reviewRating: { gte: parseFloat(searchParams.rating.toString()) },
    };

  const validOrderByOptions = Object.keys(prisma.course.fields).filter(
    (field) => field !== "reviews"
  );

  const orderBy = searchParams
    ? validOrderByOptions.includes(searchParams!.orderBy)
      ? { [searchParams.orderBy]: "asc" }
      : undefined
    : undefined;

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
          orderBy: orderBy,
          include: {
            instructor: true,
          },
        });

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
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
