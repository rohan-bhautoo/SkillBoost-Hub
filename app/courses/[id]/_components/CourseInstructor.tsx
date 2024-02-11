"use client";
import CollapsableContainer from "@/app/components/CollapsableContainer";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Instructor } from "@prisma/client";
import { FaAward, FaPlayCircle, FaStar, FaUserFriends } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface Props {
  instructor: Instructor;
}

const CourseInstructor = ({ instructor }: Props) => {
  const infos: { label: string; icon: IconType }[] = [
    { label: "4.6 Instructor Rating", icon: FaStar },
    { label: "1,136,656 Reviews", icon: FaAward },
    { label: "3,727,606 Students", icon: FaUserFriends },
    { label: "81 Courses", icon: FaPlayCircle },
  ];

  return (
    <Card mt="4">
      <CardHeader pb={0}>
        <Heading size="md">Instructor</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="2xl" pb={4}>
          {instructor.firstName} {instructor.lastName}
        </Text>
        <Flex align="center" gap={4}>
          <Avatar
            name={instructor.firstName}
            src={instructor.image!}
            size="2xl"
          />
          <List spacing={1}>
            {infos.map((info, index) => (
              <ListItem key={index}>
                <ListIcon as={info.icon} mb={0.5} mr={4} />
                {info.label}
              </ListItem>
            ))}
          </List>
        </Flex>
        <CollapsableContainer startingHeight={100}>
          <Text pt={4}>
            {instructor.firstName} {instructor.lastName} has a BS and MS in
            Mechanical Engineering from Santa Clara University and years of
            experience as a professional instructor and trainer for Data
            Science, Machine Learning and Python Programming. He has
            publications and patents in various fields such as microfluidics,
            materials science, and data science. Over the course of his career
            he has developed a skill set in analyzing data and he hopes to use
            his experience in teaching and data science to help other people
            learn the power of programming, the ability to analyze data, and the
            skills needed to present the data in clear and beautiful
            visualizations. Currently he works as the Head of Data Science for
            Pierian Training and provides in-person data science and python
            programming training courses to employees working at top companies,
            including General Electric, Cigna, SalesForce, Starbucks, McKinsey
            and many more. Feel free to check out the website link to find out
            more information about training offerings.
          </Text>
        </CollapsableContainer>
      </CardBody>
    </Card>
  );
};

export default CourseInstructor;
