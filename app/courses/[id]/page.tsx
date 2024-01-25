import RatingStar from "@/app/components/RatingStar";
import prisma from "@/prisma/client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { cache } from "react";
import CourseObjectives from "./_components/CourseObjectives";
import CourseSidebar from "./_components/CourseSidebar";
import CourseTopics from "./_components/CourseTopics";

interface Props {
  params: { id: string };
}

const fetchCourse = cache((courseId: number) =>
  prisma.course.findUnique({
    where: {
      id: courseId,
    },
    include: {
      instructor: true,
      courseDetails: {
        include: {
          images: true,
          content: {
            include: {
              topics: true,
            },
          },
        },
      },
    },
  })
);

const CourseDetailPage = async ({ params }: Props) => {
  const course = await fetchCourse(parseInt(params.id));

  if (!course) notFound();

  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={{ base: 0, sm: 0, md: 5, lg: 5, xl: 5 }}
      px={{ md: 5, lg: 10 }}
    >
      <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
        <Box>
          <Heading>{course.title}</Heading>
          <Text my={2} fontSize="lg">
            {course.courseDetails?.description}
          </Text>
          <RatingStar rating={course.reviewRating ?? 0} totalReviews={20} />
          <Text my={2}>
            Created by {course.instructor.firstName}{" "}
            {course.instructor.lastName}
          </Text>
          <Text>Last updated {course.updatedAt.toLocaleDateString()}</Text>
          <CourseObjectives />
          <Card>
            <CardHeader pb={0}>
              <Heading size="md">Topics</Heading>
            </CardHeader>
            <CardBody>
              {course.courseDetails?.content.map((content) => (
                <CourseTopics
                  key={content.id}
                  content={content}
                  topics={content.topics}
                />
              ))}
            </CardBody>
          </Card>
        </Box>
      </GridItem>
      <GridItem>
        <CourseSidebar course={course} />
      </GridItem>
    </SimpleGrid>
  );
};

export default CourseDetailPage;
