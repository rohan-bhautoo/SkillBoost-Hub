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
              />
              <Button
                fontWeight="normal"
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
                value={category.id}
                onClick={(e) => {
                  const selectedCategory = e.currentTarget.value;

                  const params = new URLSearchParams(searchParams.toString());

                  if (selectedCategory)
                    params.set("category", selectedCategory);
                  else params.delete("category");

                  const query = params.toString();
                  router.push(`/courses${query ? `?${query}` : ""}`);
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
