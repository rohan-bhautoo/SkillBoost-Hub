import { cache } from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const fetchCourse = cache((courseId: number) =>
  prisma.course.findUnique({
    where: {
      id: courseId,
    },
  })
);

const CourseDetailPage = async ({ params }: Props) => {
  const course = await fetchCourse(parseInt(params.id));

  return <div>CourseDetailPage {course?.id}</div>;
};

export default CourseDetailPage;
