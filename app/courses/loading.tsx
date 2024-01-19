"use client";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  SimpleGrid,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import CourseCardContainer from "../components/CourseCardContainer";

const LoadingCoursesPage = () => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        my={5}
        padding="10px"
        spacing={6}
      >
        {courses.map((course) => (
          <CourseCardContainer key={course}>
            <Card>
              <CardBody p={0}>
                <Skeleton w="100%" h="250px" />

                <Box p={6}>
                  <Box display="flex" alignItems="baseline">
                    <SkeletonText noOfLines={1} />
                  </Box>
                  <Box
                    mt="1"
                    fontSize="lg"
                    fontWeight="semibold"
                    as="h2"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    <SkeletonText noOfLines={1} skeletonHeight={4} />
                  </Box>

                  <SkeletonText
                    mt="2"
                    skeletonHeight="2"
                    noOfLines={1}
                    w="100px"
                  />

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon key={i} color="gray.300" />
                      ))}
                    <SkeletonText
                      ml={2}
                      noOfLines={1}
                      w="60px"
                      skeletonHeight={3}
                    />
                  </Box>

                  <Box mt={2} fontWeight="bold" fontSize="xl">
                    <SkeletonText
                      mt={2}
                      noOfLines={1}
                      w="80px"
                      skeletonHeight={5}
                    />
                  </Box>
                </Box>
              </CardBody>
            </Card>
          </CourseCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default LoadingCoursesPage;
