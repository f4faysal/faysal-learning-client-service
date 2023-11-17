"use client";

import { redirect } from "next/navigation";

import { useCoursesQuery } from "@/redux/api/courseApi";
import { getUserInfo } from "@/services/auth.service";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const CoursesPage = () => {
  const { userId }: any = getUserInfo();
  const { data, isLoading } = useCoursesQuery({});

  if (!userId) {
    return redirect("/");
  }

  const courses = data?.filter((course: any) => course.userId === userId);

  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} data={courses} />
    </div>
  );
};

export default CoursesPage;
