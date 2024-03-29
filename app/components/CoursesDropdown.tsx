import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
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
        borderRadius={15}
      >
        Courses
      </MenuButton>
      <MenuList>
        <SimpleGrid columns={4} p={5} gap={4}>
          {categories?.map((category) => (
            <MenuItem key={category.id} fontSize={14} pl={4} borderRadius={10}>
              {category.name}
            </MenuItem>
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
