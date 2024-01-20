"use client";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

  return (
    <Flex align="center" gap="2" width="100%" justify={"center"}>
      <Button
        color="gray"
        variant="soft"
        isDisabled={currentPage === 1}
        onClick={() => changePage(1)}
      >
        <ArrowLeftIcon mt={1} mr={2} />
        First
      </Button>
      <Button
        color="gray"
        variant="soft"
        isDisabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <ChevronLeftIcon mt={1} />
        Previous
      </Button>

      {Array.from({ length: pageCount }, (_, index) => (
        <Button
          key={index + 1}
          colorScheme={currentPage === index + 1 ? "blue" : "gray"}
          variant="outline"
          onClick={() => changePage(index + 1)}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        color="gray"
        variant="soft"
        isDisabled={currentPage === pageCount}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
        <ChevronRightIcon mt={1} />
      </Button>
      <Button
        color="gray"
        variant="soft"
        isDisabled={currentPage === pageCount}
        onClick={() => changePage(pageCount)}
      >
        Last <ArrowRightIcon mt={1} ml={2} />
      </Button>
    </Flex>
  );
};

export default Pagination;
