import RatingStar from "@/app/components/RatingStar";
import prisma from "@/prisma/client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { cache } from "react";
import { FaHeart } from "react-icons/fa";
import noImage from "../../assets/no-image-placeholder.webp";
import CourseOverview from "./_components/CourseOverview";

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
        <Heading>{course.title}</Heading>
        <Text>{course.courseDetails?.description}</Text>
        <RatingStar rating={course.reviewRating ?? 0} totalReviews={20} />
        <Text>
          Created by {course.instructor.firstName} {course.instructor.lastName}
        </Text>
        <Text>Last updated {course.updatedAt.toUTCString()}</Text>
      </GridItem>
      <GridItem>
        <Card position="sticky" borderRadius="lg" top="20px">
          <CardBody p={0} textAlign="center">
            <Image
              src={course.thumbnail!}
              fallbackSrc={noImage.src}
              w="100%"
              h="250px"
              objectFit="cover"
              borderTopRadius="lg"
            />
            <Box p={6}>
              <Flex justify="space-between" mb={2}>
                <Box textAlign="left" fontWeight="bold" fontSize="3xl">
                  ${course.price}
                </Box>
                <IconButton
                  variant="ghost"
                  size="lg"
                  icon={<FaHeart color="red" />}
                  aria-label="Add to favorite"
                  borderRadius="full"
                />
              </Flex>

              <ButtonGroup orientation="vertical" w="100%" mt={4} spacing={4}>
                <Button colorScheme="blue" variant="solid">
                  Add to cart
                </Button>
                <Button colorScheme="blue" variant="outline">
                  Buy now
                </Button>
              </ButtonGroup>
              <Text mt={2} fontSize={"xs"}>
                30-Day Money-Back Guarantee
              </Text>

              <CourseOverview />

              <Flex mt={5} gap={5} justify="center">
                <Link
                  href={`/courses/${course.id}`}
                  fontWeight="bold"
                  textDecoration={"underline"}
                >
                  Share
                </Link>
                <Link
                  href={`/courses/${course.id}`}
                  fontWeight="bold"
                  textDecoration={"underline"}
                >
                  Gift this course
                </Link>
                <Link
                  href={`/courses/${course.id}`}
                  fontWeight="bold"
                  textDecoration={"underline"}
                >
                  Apply Coupon
                </Link>
              </Flex>
            </Box>
          </CardBody>
        </Card>
      </GridItem>
    </SimpleGrid>
  );
};

export default CourseDetailPage;
