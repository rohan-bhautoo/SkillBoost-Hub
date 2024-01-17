import { Box } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import CourseLevelList from "./CourseLevelList";

const Sidebar = () => {
  return (
    <>
      <CategoryList />
      <Box mb={4} />
      <CourseLevelList />
    </>
  );
};

export default Sidebar;
