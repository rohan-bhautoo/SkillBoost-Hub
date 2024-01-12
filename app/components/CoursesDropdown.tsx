import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CoursesDropdown = () => {
  const { data: categories, error, isLoading } = useCategories();

  if (error) return null;

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon mt={1} />}
        bg="none"
        gap={4}
        borderRadius={15}
      >
        Courses
      </MenuButton>
      <MenuList>
        <SimpleGrid columns={4} p={5} gap={4}>
          {categories?.map((category) => (
            <MenuGroup key={category.id} title={category.name} p={0}>
              {category.categorySubcategories?.map((subCategory) => (
                <MenuItem
                  key={subCategory.id}
                  fontSize={14}
                  pl={4}
                  borderRadius={10}
                >
                  {subCategory.subCategory.name}
                </MenuItem>
              ))}
            </MenuGroup>
          ))}
        </SimpleGrid>
      </MenuList>
    </Menu>
  );
};

const useCategories = () =>
  useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () =>
      axios.get<Category[]>("/api/categories").then((res) => res.data),
    staleTime: 60 * 1440 * 1000, //24h
    retry: 3,
  });

export default CoursesDropdown;
