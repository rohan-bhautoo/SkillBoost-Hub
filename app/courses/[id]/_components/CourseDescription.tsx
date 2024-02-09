"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Heading,
} from "@chakra-ui/react";
import { CourseDetails } from "@prisma/client";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  courseDetails: CourseDetails;
}

const CourseDescription = ({ courseDetails }: Props) => {
  if (!courseDetails) return null;

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Card mt="4">
      <CardHeader pb={0}>
        <Heading size="md">Description</Heading>
      </CardHeader>
      <CardBody className="prose max-w-full text-current" pt={0}>
        <Collapse startingHeight={200} in={show}>
          <ReactMarkdown
            components={{
              strong: ({ node, ...props }) => (
                <strong className="font-bold text-current" {...props} />
              ),
              hgroup: ({ node, ...props }) => (
                <strong className="font-bold text-current" {...props} />
              ),
            }}
          >
            {courseDetails.description}
          </ReactMarkdown>
        </Collapse>
        <Button size="sm" onClick={handleToggle} mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
      </CardBody>
    </Card>
  );
};

export default CourseDescription;
