"use client";

import { useCoursesQuery } from "@/redux/api/courseApi";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const { data, isLoading } = useCoursesQuery({});

  // const course = data?.find((course) => course.id === params.courseId);
  const course: any = data;
  // if (!course) {
  //   return redirect("/");
  // }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // return redirect(`/courses/chapters/${course?.chapters[0]?.id}`);
};

export default CourseIdPage;
