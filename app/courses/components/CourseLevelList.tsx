import {
  Badge,
  Checkbox,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Level } from "@prisma/client";

const levelMap: Record<
  Level,
  { label: string; color: "green" | "yellow" | "purple" }
> = {
  Beginner: { label: "Beginner", color: "green" },
  Intermediate: { label: "Intermediate", color: "yellow" },
  Advanced: { label: "Advanced", color: "purple" },
};

const CourseLevelList = () => {
  return (
    <>
      <Heading fontSize={"xl"} marginBottom={2}>
        Levels
      </Heading>
      <List>
        <ListItem paddingY="5px">
          <Checkbox value="default">
            <Badge as={Link} colorScheme="default" mb={1}>
              All Levels
            </Badge>
          </Checkbox>
        </ListItem>
        {Object.values(levelMap).map((level) => (
          <ListItem key={level.label} paddingY="5px">
            <Checkbox value={level.label}>
              <Badge as={Link} colorScheme={level.color} mb={1}>
                {level.label}
              </Badge>
            </Checkbox>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CourseLevelList;
