"use client";

import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/services/auth.service";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

const CoursesPage = () => {
  const { userId }: any = getUserInfo();
  console.log(userId);
  if (!userId) {
    return redirect("/");
  }

  // const courses = await db.course.findMany({
  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  return (
    <div className="p-6">
      <Link href="/dashboard/teacher/create">
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          New course
        </Button>
      </Link>
      {/* <DataTable columns={columns} data={courses} /> */}
    </div>
  );
};

export default CoursesPage;
