import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { CourseDetails } from "@prisma/client";
import ReactMarkdown from "react-markdown";

interface Props {
  courseDetails: CourseDetails;
}

const CourseDescription = ({ courseDetails }: Props) => {
  if (!courseDetails) return null;

  return (
    <Card mt="4">
      <CardHeader pb={0}>
        <Heading size="md">Description</Heading>
      </CardHeader>
      <CardBody className="prose max-w-full text-current">
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
      </CardBody>
    </Card>
  );
};

export default CourseDescription;
