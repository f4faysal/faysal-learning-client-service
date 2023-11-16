"use client";

import { onOpen } from "@/redux/features/modal/modalSlice";
import { getUserInfo } from "@/services/auth.service";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { MainNav } from "./main-nav";
import Profile from "./profile";
import UseModal from "./reusable-ui/use-modal";
import SingUp from "./ui/auth/sing-up";
import LoginPage from "./ui/auth/song-in";
import { Button } from "./ui/button";
import Container from "./ui/container";

const RootNavBar = () => {
  const { role }: any = getUserInfo();
  const dispatch = useDispatch();
  const [toggleLogin, setToggleLogin] = useState<string>("sing-in");

  console.log(role);

  return (
    <nav className="border-b">
      <UseModal title="" description="">
        {toggleLogin === "sing-in" ? (
          <LoginPage setToggleLogin={setToggleLogin} />
        ) : (
          <SingUp setToggleLogin={setToggleLogin} />
        )}
      </UseModal>
      <Container>
        <div className="flex h-16 items-center px-4">
          <Link href="/">
            <Image src="logo.svg" width={100} height={100} alt="logo" />
          </Link>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            {role ? (
              <Profile />
            ) : (
              // <Link href="/sign-in">
              <Button
                onClick={() => {
                  dispatch(onOpen());
                  setToggleLogin("sing-in");
                }}
                className="flex gap-2"
                size={"sm"}
                variant={"outline"}
              >
                <LogIn width={18} /> Sign In
              </Button>
              // </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default RootNavBar;
