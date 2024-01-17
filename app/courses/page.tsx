import { Box, HStack } from "@chakra-ui/react";
import CourseGrid from "../components/CourseGrid";
import SortSelector from "../components/SortSelector";

const CoursesPage = () => {
  return (
    <>
      <Box paddingLeft={2}>
        <HStack spacing={5} marginBottom={5}>
          <SortSelector />
        </HStack>
      </Box>
      <CourseGrid fetchAll={true} />
    </>
  );
};

export default CoursesPage;
