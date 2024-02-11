"use client";
import CollapsableContainer from "@/app/components/CollapsableContainer";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

const CourseObjectives = () => {
  const objectives: string[] = [
    "You will learn how to leverage the power of Python to solve tasks.",
    "You will be able to use Python for your own work problems or personal projects.",
    "Learn to use Python professionally, learning both Python 2 and Python 3!",
    "Learn advanced Python features, like the collections module and how to work with timestamps!",
    "Understand complex topics, like decorators.",
    "Get an understanding of how to create GUIs in the Jupyter Notebook system!",
    "You will build games and programs that use Python libraries.",
    "You will create a portfolio of Python based projects you can share.",
    "Create games with Python, like Tic Tac Toe and Blackjack!",
    "Learn to use Object Oriented Programming with classes!",
    "Understand how to use both the Jupyter Notebook and create .py files",
    "Build a complete understanding of Python from the ground up!",
  ];

  return (
    <Card my={5}>
      <CardHeader pb={0}>
        <Heading size="md">What you&apos;ll learn</Heading>
      </CardHeader>
      <CardBody>
        <CollapsableContainer startingHeight={100}>
          <SimpleGrid columns={2} gap={4}>
            {objectives.map((objective, index) => (
              <List key={index}>
                <ListItem>
                  <ListIcon mb={0.5} as={MdCheckCircle} color="green.500" />
                  {objective}
                </ListItem>
              </List>
            ))}
          </SimpleGrid>
        </CollapsableContainer>
      </CardBody>
    </Card>
  );
};

export default CourseObjectives;
