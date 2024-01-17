import { Box } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import CourseLevelList from "./CourseLevelList";
import RatingList from "./RatingList";

const Sidebar = () => {
  return (
    <>
      <CategoryList />
      <Box mb={4} />
      <CourseLevelList />
      <Box mb={4} />
      <RatingList />
    </>
  );
};

export default Sidebar;
