"use client";
import { Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import { Course, Instructor } from "@prisma/client";
import Link from "next/link";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import noImage from "../assets/no-image-placeholder.webp";
import CourseLevelBadge from "./CourseLevelBadge";

interface Props {
  course: Course;
  instructor: Instructor;
}

const CourseCard = ({ course, instructor }: Props) => {
  const fullStars = Math.floor(course.reviewRating!); // Number of full stars
  const hasHalfStar = course.reviewRating! % 1 !== 0; // Check if there's a half star

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
                .map((_, i) => {
                  if (i < fullStars) {
                    return <MdOutlineStar key={i} color="#ffd700" size={20} />;
                  } else if (hasHalfStar && i === fullStars) {
                    return (
                      <MdOutlineStarHalf key={i} color="#ffd700" size={20} />
                    );
                  } else {
                    return <MdOutlineStar key={i} color="gray" size={20} />;
                  }
                })}

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
