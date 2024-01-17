import { Box, HStack } from "@chakra-ui/react";
import CourseGrid from "../components/CourseGrid";
import SortSelector from "../components/SortSelector";
import { Level } from "@prisma/client";

interface Props {
  searchParams: { level: Level };
}

const CoursesPage = ({ searchParams }: Props) => {
  return (
    <>
      <Box paddingLeft={2}>
        <HStack spacing={5} marginBottom={5}>
          <SortSelector />
        </HStack>
      </Box>
      <CourseGrid levelParam={searchParams.level} fetchAll={true} />
    </>
  );
};

export const dynamic = "force-dynamic";

export default CoursesPage;
