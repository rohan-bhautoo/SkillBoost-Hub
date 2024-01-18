import { Category, Level } from "@prisma/client";

export default interface CourseQuery {
  category: Category;
  level: Level;
  rating: number;
}
