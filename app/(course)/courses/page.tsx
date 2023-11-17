"use client";

import { useChaptersQuery } from "@/redux/api/chapterApi";
import { redirect } from "next/navigation";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const { data, isLoading } = useChaptersQuery({});

  // const course = data?.find((course) => course.id === params.courseId);
  const course = data;
  if (!course) {
    return redirect("/");
  }

  return redirect(`/courses/chapters/${course?.chapters[0]?.id}`);
};

export default CourseIdPage;
