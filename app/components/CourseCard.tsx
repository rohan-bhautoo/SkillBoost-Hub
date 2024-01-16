"use client";
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Card, CardBody, Image, Text } from "@chakra-ui/react";
import animationMasterclass from "../assets/3d_animation_masterclass.webp";

const CourseCard = () => {
  return (
    <Card maxW="md">
      <CardBody p={0}>
        <Image src={animationMasterclass.src} />

        <Box p={6}>
          <Box display="flex" alignItems="baseline">
            <Badge colorScheme="green">Beginner</Badge>
          </Box>
          <Box
            mt="1"
            fontSize="lg"
            fontWeight="semibold"
            as="h2"
            lineHeight="tight"
            noOfLines={1}
          >
            Animation Masterclass
          </Box>

          <Text fontSize="xs">By Rohan Bhautoo</Text>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color="yellow.500" />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              20 reviews
            </Box>
          </Box>

          <Box mt={2} fontWeight="bold" fontSize="xl">
            $450
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CourseCard;
