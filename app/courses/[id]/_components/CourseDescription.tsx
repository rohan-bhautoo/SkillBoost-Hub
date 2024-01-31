import { Card } from "@chakra-ui/react";
import { CourseDetails } from "@prisma/client";
import ReactMarkdown from "react-markdown";

interface Props {
  courseDetails: CourseDetails;
}

const CourseDescription = ({ courseDetails }: Props) => {
  if (!courseDetails) return null;

  return (
    <Card className="prose max-w-full" mt="4" p={5}>
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
    </Card>
  );
};

export default CourseDescription;
