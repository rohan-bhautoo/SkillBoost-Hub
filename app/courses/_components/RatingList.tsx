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
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RatingList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState("");
  const stars = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
  ];
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
