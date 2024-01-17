"use client";
import {
  Badge,
  Checkbox,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Level } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

const levelMap: {
  label: string;
  value?: Level;
  color: "default" | "green" | "yellow" | "purple";
}[] = [
  { label: "All Levels", color: "default" },
  { label: "Beginner", value: "Beginner", color: "green" },
  { label: "Intermediate", value: "Intermediate", color: "yellow" },
  { label: "Advanced", value: "Advanced", color: "purple" },
];

const CourseLevelList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={2}>
        Levels
      </Heading>
      <List>
        {Object.values(levelMap).map((level) => (
          <ListItem key={level.label} paddingY="5px">
            <Checkbox
              isChecked={searchParams.get("level") === level.value}
              defaultValue={searchParams.get("level") || ""}
              value={level.value || -1}
              onChange={(e) => {
                const level = e.target.value;
                const params = new URLSearchParams();
                if (level && level !== "-1") params.append("level", level);

                const query = params.size ? "?" + params.toString() : "";
                router.push("/courses" + query);
              }}
            >
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
