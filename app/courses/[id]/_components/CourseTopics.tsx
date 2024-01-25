"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { CourseContent, Topic } from "@prisma/client";
import { FaFile, FaPlayCircle } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  content: CourseContent;
  topics: Topic[];
}

const CourseTopics = ({ content, topics }: Props) => {
  const subTopics: { label: string; duration: string; icon: IconType }[] = [
    { label: "Auto-Welcome Message", duration: "00:44", icon: FaFile },
    { label: "Couse Introduction", duration: "06:39", icon: FaPlayCircle },
    {
      label: "Course Curriculum Overview",
      duration: "04:00",
      icon: FaPlayCircle,
    },
    { label: "Why?", duration: "05:17", icon: FaPlayCircle },
    { label: "Course FAQs", duration: "02:33", icon: FaFile },
  ];

  return (
    <Accordion key={content.id} defaultIndex={[0]} allowMultiple>
      {topics.map((topic) => (
        <AccordionItem key={topic.id} borderColor={"gray"}>
          <h2>
            <AccordionButton
              bgColor="var(--chakra-colors-blue-200)"
              color="black"
              _hover=""
            >
              <Box as="span" flex="1" textAlign="left">
                {topic.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List spacing={1}>
              {subTopics.map((subTopic, index) => (
                <ListItem key={index}>
                  <Flex align="center">
                    <ListIcon as={subTopic.icon} mr={4} />
                    <Text>{subTopic.label}</Text>
                    <Spacer />
                    <Text fontWeight="light">{subTopic.duration}</Text>
                  </Flex>
                </ListItem>
              ))}
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseTopics;
