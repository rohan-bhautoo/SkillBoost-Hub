"use client";
import CourseQuery from "@/app/entities/CourseQuery";
import { Badge, CloseButton, Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface Props {
  searchParams: CourseQuery;
}

const FilterBox = ({ searchParams }: Props) => {
  const router = useRouter();

  const handleFilterRemove = (filterToRemove: keyof CourseQuery) => {
    const { [filterToRemove]: removedFilter, ...remainingFilters } =
      searchParams;

    let query = Object.entries(remainingFilters)
      .filter(([_, value]) => value != null)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((v) => `${key}=${v}`).join("&");
        } else {
          return `${key}=${value}`;
        }
      })
      .join("&");

    const params = new URLSearchParams(query);
    if (params.has("page")) {
      params.delete("page");
      query = params.toString();
    }

    router.push(`/courses/list${query ? `?${query}` : ""}`);
  };

  return (
    <Flex>
      {Object.entries(searchParams).map(
        ([key, value]) =>
          // Only display non-empty and non-undefined filters
          key !== "page" &&
          value != null && (
            <Badge
              key={key}
              colorScheme="blue"
              variant="solid"
              borderRadius="full"
              px={3}
              pl={5}
              py={2}
              mr={2}
              display="flex"
              alignItems="center"
            >
              {`${key}: ${value}`}
              <CloseButton
                size="sm"
                onClick={() => handleFilterRemove(key as keyof CourseQuery)}
                ml={2}
              />
            </Badge>
          )
      )}
    </Flex>
  );
};

export default FilterBox;
