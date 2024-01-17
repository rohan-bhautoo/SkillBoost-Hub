import noImage from "@/app/assets/no-image-placeholder.webp";
import prisma from "@/prisma/client";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";

const CategoryList = async () => {
  const categories = await prisma.category.findMany();

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
