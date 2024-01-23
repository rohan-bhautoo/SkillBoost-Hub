"use client";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FaCode, FaFile, FaMobileAlt, FaPlayCircle } from "react-icons/fa";
import { FaInfinity, FaTrophy } from "react-icons/fa6";

const CourseOverview = () => {
  return (
    <Box textAlign="left" mt={4}>
      <Text fontWeight="bold" fontSize="lg">
        This course includes:
      </Text>
      <List spacing={1}>
        <ListItem>
          <ListIcon as={FaPlayCircle} mr={4} />
          22 hours on-demand video
        </ListItem>
        <ListItem>
          <ListIcon as={FaCode} mr={4} />
          19 coding exercises
        </ListItem>
        <ListItem>
          <ListIcon as={FaFile} mr={4} />
          15 articles
        </ListItem>
        <ListItem>
          <ListIcon as={FaMobileAlt} mr={4} />
          Access on mobile and TV
        </ListItem>
        <ListItem>
          <ListIcon as={FaInfinity} mr={4} />
          Full lifetime access
        </ListItem>
        <ListItem>
          <ListIcon as={FaTrophy} mr={4} />
          Certificate of completion
        </ListItem>
      </List>
    </Box>
  );
};

export default CourseOverview;
