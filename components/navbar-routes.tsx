"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
// import { isTeacher } from "@/lib/teacher";

import Profile from "./profile";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  //   const { userId } = useAuth();
  const userId = "123";
  const pathname = usePathname();

  const isTeacher = true;

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button size="sm" variant="ghost">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher ? (
          <Link href="/dashboard/teacher/courses">
            <Button size="sm" variant="ghost">
              Teacher mode
            </Button>
          </Link>
        ) : null}
        {/* <UserButton afterSignOutUrl="/" /> */}
        <Profile />
      </div>
    </>
  );
};
