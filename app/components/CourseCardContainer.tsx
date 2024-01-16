import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CourseCardContainer = ({ children }: Props) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      overflow="hidden"
      cursor="pointer"
    >
      {children}
    </Box>
  );
};

export default CourseCardContainer;
