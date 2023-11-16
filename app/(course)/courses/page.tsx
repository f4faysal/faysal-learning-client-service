import { redirect } from "next/navigation";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const course = {
    chapters: [
      {
        id: "1",
        title: "Chapter 1",
      },
      {
        id: "2",
        title: "Chapter 2",
      },
    ],
  };

  if (!course) {
    return redirect("/");
  }

  return redirect(`/courses/chapters/${course.chapters[0].id}`);
};

export default CourseIdPage;
