import { Badge } from "@chakra-ui/react";
import { Level } from "@prisma/client";
import React from "react";

interface Props {
  level: Level;
}

const levelMap: Record<
  Level,
  { label: string; color: "green" | "yellow" | "purple" }
> = {
  Beginner: { label: "Beginner", color: "green" },
  Intermediate: { label: "Intermediate", color: "yellow" },
  Advanced: { label: "Advanced", color: "purple" },
};

const CourseLevelBadge = ({ level }: Props) => {
  return (
    <Badge colorScheme={levelMap[level].color}>{levelMap[level].label}</Badge>
  );
};

export default CourseLevelBadge;
