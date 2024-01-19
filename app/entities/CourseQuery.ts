import { Category, Level } from "@prisma/client";

export default interface CourseQuery {
  category: number;
  level: Level;
  rating: number;
}
