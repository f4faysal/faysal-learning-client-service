"use client";

import { onOpen } from "@/redux/features/modal/modalSlice";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { MainNav } from "./main-nav";
import Profile from "./profile";
import UseModal from "./reusable-ui/use-modal";
import { Button } from "./ui/button";
import Container from "./ui/container";

const RootNavBar = () => {
  // const { role }: any = getUserInfo();
  const dispatch = useDispatch();

  const role = undefined;

  return (
    <nav className="border-b">
      <UseModal title="Login" description="">
        <h1>modal</h1>
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
                onClick={() => dispatch(onOpen())}
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
