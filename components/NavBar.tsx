"use client";

import { getUserInfo } from "@/services/auth.service";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import Profile from "./profile";
import { Button } from "./ui/button";
import Container from "./ui/container";

const NavBar = () => {
  const { role }: any = getUserInfo();

  return (
    <nav className="border-b bg-[#EBF6FF]">
      <Container>
        <div className="flex h-16 items-center px-4">
          <Link href="/">
            <Image
              src="/assets/estate-ease-logo.png"
              width={100}
              height={100}
              alt="Estate ease logo"
            />
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <MainNav className="mx-6" />
            {/* <ThemeToggle /> */}

            {role ? (
              <Profile />
            ) : (
              <Link href="/sign-in">
                <Button className="flex gap-2" size={"sm"} variant={"outline"}>
                  <LogIn width={18} /> Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
