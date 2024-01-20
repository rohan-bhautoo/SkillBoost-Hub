import { Box, HStack } from "@chakra-ui/react";
import CourseGrid from "../components/CourseGrid";
import SortSelector from "../components/SortSelector";
import CourseQuery from "../entities/CourseQuery";
import FilterBox from "./_components/FilterBox";

interface Props {
  searchParams: CourseQuery;
}

const CoursesPage = ({ searchParams }: Props) => {
  return (
    <>
      <Box paddingLeft={2}>
        <HStack spacing={5} marginBottom={5}>
          <SortSelector searchParams={searchParams} />
          <FilterBox searchParams={searchParams} />
        </HStack>
      </Box>
      <CourseGrid searchParams={searchParams} fetchAll={true} />
    </>
  );
};

export const dynamic = "force-dynamic";

export default CoursesPage;
