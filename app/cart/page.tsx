import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const CartPage = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
      spacing={{ base: 0, sm: 0, md: 5, lg: 5, xl: 5 }}
      px={{ md: 5, lg: 10 }}
    >
      <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
        <Box>
          <Heading>Cart</Heading>
        </Box>
      </GridItem>
      <GridItem>
        <Text>Payment Info</Text>
      </GridItem>
    </SimpleGrid>
  );
};

export default CartPage;
