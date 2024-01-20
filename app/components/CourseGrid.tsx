import prisma from "@/prisma/client";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { Level } from "@prisma/client";
import CourseQuery from "../entities/CourseQuery";
import CourseCard from "./CourseCard";
import CourseCardContainer from "./CourseCardContainer";
import Pagination from "./Pagination";

interface Props {
  searchParams?: CourseQuery;
  fetchAll: boolean;
}

const CourseGrid = async ({ fetchAll, searchParams }: Props) => {
  const levels = Object.values(Level);

  let where = {};

  if (searchParams?.level) {
    if (Array.isArray(searchParams.level)) {
      // Multiple levels selected
      const validLevels = searchParams.level.filter((lvl) =>
        levels.includes(lvl)
      );

      where = { level: { in: validLevels } };
    } else if (
      typeof searchParams.level === "string" &&
      levels.includes(searchParams.level)
    ) {
      // Single level selected and is valid
      where = { level: searchParams.level };
    }
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

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const pageSize = 8;

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
          skip: (page - 1) * pageSize,
          take: pageSize,
          include: {
            instructor: true,
          },
        });

  const courseCount = await prisma.course.count({
    where: where,
  });

  return (
    <>
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
      {fetchAll && (
        <Box w="100%">
          <Center>
            <Pagination
              pageSize={pageSize}
              currentPage={page}
              itemCount={courseCount}
            />
          </Center>
        </Box>
      )}
    </>
  );
};

export default CourseGrid;
