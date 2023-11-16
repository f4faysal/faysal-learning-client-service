"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const formSchema = z.object({
  id: z.string().min(7, { message: "User Id must be at least 7 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const LoginPage = () => {
  const [res, setRes] = useState<any>(null);

  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res: any = await userLogin(values);
      if (res?.data?.accessToken) {
        router.push("/");
        form.reset();
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success("User logged in successfully!");
      } else {
        toast.error(res?.error);
        setRes(res?.error);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-screen bg-[#f8fafc] h-screen flex items-center justify-center">
      <div className="w-[80%] bg-white shadow-lg  md:w-[300px] h-auto  border  rounded-md px-4 py-8 grid grid-flow-row  auto-rows-max gap-2">
        <div className="h-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold text-center">Sign in</h1>

          <p className="text-xs text-slate-400">
            Sign in to access your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Your user id </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your User Id" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password" // Set the input type to "password"
                      placeholder="Your Password"
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-slate-400 text-xs hover:text-slate-800"
              >
                Forgot Password?
              </a>
            </div>
            <Button type="submit" className="w-full mt-2">
              Login
            </Button>
          </form>
          <p className="text-red-600 text-sm">{res}</p>
        </Form>

        <div className="flex justify-center items-center gap-2">
          <p className="text-slate-400 text-sm">Don`t have an account?</p>
          <Link
            href="/sign-up"
            className="text-slate-800 hover:text-slate-600 text-sm"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
