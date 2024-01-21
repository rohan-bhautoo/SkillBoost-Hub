"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Course, Instructor } from "@prisma/client";
import noImage from "../assets/no-image-placeholder.webp";
import CourseLevelBadge from "./CourseLevelBadge";
import Link from "next/link";

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

            <Box display="flex" mt="2" alignItems="center">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < course.reviewRating! ? "yellow.500" : "gray.300"}
                  />
                ))}
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                20 reviews
              </Box>
            </Box>

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
