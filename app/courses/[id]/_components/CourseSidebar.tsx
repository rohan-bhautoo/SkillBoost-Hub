import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Course } from "@prisma/client";
import { FaHeart } from "react-icons/fa";
import noImage from "@/app/assets/no-image-placeholder.webp";
import CourseOverview from "./CourseOverview";

interface Props {
  course: Course;
}

const CourseSidebar = ({ course }: Props) => {
  return (
    <Card position="sticky" borderRadius="lg" top="20px">
      <CardBody p={0} textAlign="center">
        <Image
          src={course.thumbnail!}
          fallbackSrc={noImage.src}
          w="100%"
          h="250px"
          objectFit="cover"
          borderTopRadius="lg"
          alt="Thumbnail"
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
  );
};

export default CourseSidebar;
