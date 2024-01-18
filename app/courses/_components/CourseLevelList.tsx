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
  value?: Level | "-1";
  color: "default" | "green" | "yellow" | "purple";
}[] = [
  { label: "All Levels", value: "-1", color: "default" },
  { label: "Beginner", value: "Beginner", color: "green" },
  { label: "Intermediate", value: "Intermediate", color: "yellow" },
  { label: "Advanced", value: "Advanced", color: "purple" },
];

const CourseLevelList = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isChecked = (value?: Level | "-1") => {
    const selectedLevels = searchParams.getAll("level");
    return value === "-1"
      ? selectedLevels.length === 0
      : selectedLevels.includes(value!);
  };

  return (
    <>
      <Heading fontSize={"xl"} marginBottom={2}>
        Levels
      </Heading>
      <List>
        {Object.values(levelMap).map((level) => (
          <ListItem key={level.label} paddingY="5px">
            <Checkbox
              isChecked={isChecked(level.value)}
              defaultChecked={level.value === "-1"}
              value={level.value}
              onChange={(e) => {
                const selectedLevel = e.target.value;
                const selectedLevels = searchParams.getAll("level");

                let updatedLevels: string[];

                if (selectedLevel === "-1") {
                  updatedLevels = [];
                } else if (selectedLevels.includes(selectedLevel)) {
                  updatedLevels = selectedLevels.filter(
                    (level) => level !== selectedLevel
                  );
                } else {
                  updatedLevels = [...selectedLevels, selectedLevel];
                }

                const params = new URLSearchParams();

                updatedLevels.forEach((level) => {
                  params.append("level", level);
                });

                const query = params.toString() ? `?${params.toString()}` : "";
                router.push(`/courses${query}`);
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
