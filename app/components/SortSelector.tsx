import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import NextLink from "next/link";
import CourseQuery from "../entities/CourseQuery";

interface Props {
  searchParams: CourseQuery;
}

const SortSelector = ({ searchParams }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "title", label: "Name" },
    { value: "price", label: "Price" },
    { value: "createdAt", label: "Release date" },
    { value: "updatedAt", label: "Recently Updated" },
    { value: "rating", label: "Average rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
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
