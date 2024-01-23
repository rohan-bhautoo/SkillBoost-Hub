import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Course, Instructor } from "@prisma/client";
import Link from "next/link";
import noImage from "../assets/no-image-placeholder.webp";
import CourseLevelBadge from "./CourseLevelBadge";
import RatingStar from "./RatingStar";

interface Props {
  course: Course;
  instructor: Instructor;
}

const CourseCard = ({ course, instructor }: Props) => {
  return (
    <Link href={`/courses/${course.id}`}>
      <Card>
        <CardBody p={0}>
          <Image
            src={course.thumbnail ?? noImage.src}
            w="100%"
            h="250px"
            objectFit="cover"
          />

          <Box p={6}>
            <Box display="flex" alignItems="baseline">
              <CourseLevelBadge level={course.level} />
            </Box>
            <Box
              mt="1"
              fontSize="lg"
              fontWeight="semibold"
              as="h2"
              lineHeight="tight"
              noOfLines={1}
            >
              {course.title}
            </Box>

            <Text fontSize="xs">
              By {instructor.firstName} {instructor.lastName}
            </Text>

            <RatingStar rating={course.reviewRating ?? 0} totalReviews={20} />

            <Box mt={2} fontWeight="bold" fontSize="xl">
              ${course.price}
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CourseCard;
