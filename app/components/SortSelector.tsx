import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsChevronDown } from "react-icons/bs";
import CourseQuery from "../entities/CourseQuery";

interface Props {
  searchParams: CourseQuery;
}

const SortSelector = ({ searchParams }: Props) => {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "title", label: "Name" },
    { value: "price", label: "Price" },
    { value: "createdAt", label: "Release date" },
    { value: "updatedAt", label: "Recently Updated" },
    { value: "reviewRating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === searchParams.orderBy
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            as={NextLink}
            href={{
              query: { ...searchParams, orderBy: order.value },
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
