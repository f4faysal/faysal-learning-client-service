"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { role }: any = getUserInfo();

  const pathname = usePathname();
  const params = useParams();

  const instactur = [
    {
      href: `/my-classes`,
      label: "My Classes",
      active: pathname === `/my-classes`,
    },
    {
      href: `/courses`,
      label: "Courses",
      active: pathname === `/my-classes`,
    },
    {
      href: `/dashboard`,
      label: "Instructor",
      active: pathname === `/dashboard`,
    },
  ];
  const student = [
    {
      href: `/my-classes`,
      label: "My Classes",
      active: pathname === `/my-classes`,
    },
    {
      href: `/courses`,
      label: "Courses",
      active: pathname === `/my-classes`,
    },
  ];

  const routesPublickUser = [
    {
      href: `/courses`,
      label: "Courses",
      active: pathname === `/my-classes`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {role === "instructor"
        ? instactur.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))
        : role === "student"
        ? student.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))
        : routesPublickUser.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                route.active
                  ? "text-black dark:text-white"
                  : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
    </nav>
  );
}
