import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import prisma from "@/prisma/client";
import ReviewCard from "./ReviewCard";
import { Review } from "@prisma/client";

const ReviewGrid = async () => {
  const reviews = await prisma.review.findMany({
    orderBy: { rating: "desc" },
    take: 3,
    include: {
      user: true,
    },
  });

  return (
    <Container maxW="100%" p={0} mt={10}>
      <Heading as="h2" size="lg" mb={3}>
        Student Reviews
      </Heading>
      <Divider />
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 3, xl: 3 }}
        my={5}
        spacing={4}
      >
        {reviews.map((review: Review) => (
          <ReviewCard key={review.id} review={review} user={review.user} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ReviewGrid;
