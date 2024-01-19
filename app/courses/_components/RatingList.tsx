"use client";
import { StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  List,
  ListItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const RatingList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stars = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
  ];

  const ratingParam = searchParams.get("rating");
  const initialRatingIndex = stars.findIndex(
    (item) => item.stars.toString() === ratingParam
  );

  const [value, setValue] = useState(
    initialRatingIndex !== -1 ? initialRatingIndex.toString() : ""
  );

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={3}>
        Rating
      </Heading>
      <List>
        {stars.map((item, index) => (
          <RadioGroup key={index} onChange={setValue} value={value}>
            <ListItem paddingY="5px">
              <Radio
                value={index.toString()}
                isChecked={index.toString() === value}
                onChange={() => {
                  const params = new URLSearchParams(searchParams.toString());

                  if (item) {
                    params.set("rating", item.stars.toString());
                  } else {
                    params.delete("rating");
                  }

                  const query = params.toString();
                  router.push(`/courses${query ? `?${query}` : ""}`);
                }}
              >
                <Button variant="link">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < item.stars ? "yellow.500" : "gray.300"}
                      />
                    ))}
                </Button>
              </Radio>
            </ListItem>
          </RadioGroup>
        ))}
      </List>
    </>
  );
};

export default RatingList;
