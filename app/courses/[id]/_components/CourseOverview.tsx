"use client";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { FaCode, FaFile, FaMobileAlt, FaPlayCircle } from "react-icons/fa";
import { FaInfinity, FaTrophy } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

const CourseOverview = () => {
  const infos: { label: string; icon: IconType }[] = [
    { label: "22 hours on-demand video", icon: FaPlayCircle },
    { label: "19 coding exercises", icon: FaCode },
    { label: "15 articles", icon: FaFile },
    { label: "Access on mobile and TV", icon: FaMobileAlt },
    { label: "Full lifetime access", icon: FaInfinity },
    { label: "Certificate of completion", icon: FaTrophy },
  ];
  return (
    <Box textAlign="left" mt={4}>
      <Text fontWeight="bold" fontSize="lg">
        This course includes:
      </Text>
      <List spacing={1}>
        {infos.map((info) => (
          <ListItem>
            <ListIcon as={info.icon} mb={0.5} mr={4} />
            {info.label}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseOverview;
