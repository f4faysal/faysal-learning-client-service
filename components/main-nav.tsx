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

  const routesHomeOwner = [
    {
      href: `/en/list-your-property`,
      label: "Add Property",
      active: pathname === `/en/list-your-property`,
    },
    {
      href: `/en/blog`,
      label: "Blog",
      active: pathname === `/en/blog`,
    },
    {
      href: `/en/guides`,
      label: "Guides",
      active: pathname === `/en/guides`,
    },
    {
      href: `/en/new-projects`,
      label: "New Projects",
      active: pathname === `/en/new-projects`,
    },
    {
      href: `/en/services`,
      label: "Services",
      active: pathname === `/en/services`,
    },
    {
      href: `/en/dashboard`,
      label: "Dashboard",
      active: pathname === `/en/dashboard`,
    },
  ];
  const routesRentUser = [
    {
      href: `/en/blog`,
      label: "Blog",
      active: pathname === `/en/blog`,
    },
    {
      href: `/en/guides`,
      label: "Guides",
      active: pathname === `/en/guides`,
    },
    {
      href: `/en/new-projects`,
      label: "New Projects",
      active: pathname === `/en/new-projects`,
    },
    {
      href: `/en/services`,
      label: "Services",
      active: pathname === `/en/services`,
    },
  ];
  const routesPublickUser = [
    {
      href: `/en/list-your-property`,
      label: "Add Property",
      active: pathname === `/en/list-your-property`,
    },
    {
      href: `/en/blog`,
      label: "Blog",
      active: pathname === `/en/blog`,
    },
    {
      href: `/en/guides`,
      label: "Guides",
      active: pathname === `/en/guides`,
    },
    {
      href: `/en/new-projects`,
      label: "New Projects",
      active: pathname === `/en/new-projects`,
    },
    {
      href: `/en/services`,
      label: "Services",
      active: pathname === `/en/services`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {role === "HomeOwner"
        ? routesHomeOwner.map((route) => (
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
        : role === "RentUser"
        ? routesRentUser.map((route) => (
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
