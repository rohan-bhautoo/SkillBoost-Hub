"use client";
import noImage from "@/app/assets/no-image-placeholder.webp";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  categories: Category[];
}

const CategoryList = ({ categories }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={3}>
        Category
      </Heading>
      <List>
        {categories.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="34px"
                borderRadius={8}
                objectFit={"cover"}
                src={category.thumbnail!}
                fallbackSrc={noImage.src}
                alt="Category image"
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={
                  category.id === parseInt(categoryId!) ? "bold" : "normal"
                }
                value={category.id}
                onClick={(e) => {
                  const selectedCategory = e.currentTarget.value;

                  const params = new URLSearchParams(searchParams.toString());

                  if (selectedCategory)
                    params.set("categoryId", selectedCategory);
                  else params.delete("categoryId");

                  if (params.has("page")) params.delete("page");

                  const query = params.toString();
                  router.push(`/courses/list${query ? `?${query}` : ""}`);
                }}
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
