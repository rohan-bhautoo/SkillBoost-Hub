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

const RatingList = () => {
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
          <RadioGroup onChange={setValue} value={value}>
            <ListItem key={index} paddingY="5px">
              <Radio value={index.toString()}>
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
