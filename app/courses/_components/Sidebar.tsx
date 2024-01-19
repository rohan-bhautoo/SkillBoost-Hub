import { Box } from "@chakra-ui/react";
import CategoryList from "./CategoryList";
import CourseLevelList from "./CourseLevelList";
import RatingList from "./RatingList";
import prisma from "@/prisma/client";

const Sidebar = async () => {
  const categories = await prisma.category.findMany();

  return (
    <>
      <CategoryList categories={categories} />
      <Box mb={4} />
      <CourseLevelList />
      <Box mb={4} />
      <RatingList />
    </>
  );
};

export default Sidebar;
