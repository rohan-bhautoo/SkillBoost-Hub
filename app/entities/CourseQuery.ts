import { Course, Level } from "@prisma/client";

export default interface CourseQuery {
  categoryId: number;
  level: Level;
  rating: number;
  orderBy: keyof Course;
  page: string;
}
