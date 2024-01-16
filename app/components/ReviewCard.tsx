import {
  Card,
  CardBody,
  Flex,
  Spacer,
  Divider,
  CardFooter,
  Avatar,
  Heading,
  Box,
  Text,
  Center,
} from "@chakra-ui/react";
import { Review, User } from "@prisma/client";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

interface Props {
  review: Review;
  user: User;
}

const ReviewCard = ({ review, user }: Props) => {
  return (
    <Card variant="filled">
      <CardBody borderTopRadius="lg">
        <Flex>
          <RiDoubleQuotesL />
          <Spacer />
        </Flex>
        <Text h="60px">{review.comment}</Text>
        <Flex>
          <Spacer />
          <RiDoubleQuotesR />
        </Flex>
        <Divider mt={5} />
      </CardBody>

      <CardFooter pt={0} borderBottomRadius="lg">
        <Center gap={5}>
          <Avatar name={user.name!} src={user.image!} />
          <Heading size="sm">{user.name!}</Heading>
        </Center>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
