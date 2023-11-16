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

import { useUserSingUpMutation } from "@/redux/api/authApi";
import { onClose } from "@/redux/features/modal/modalSlice";
import { storeUserInfo } from "@/services/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

interface SingUpProps {
  setToggleLogin: any;
}

const SingUp = ({ setToggleLogin }: SingUpProps) => {
  const [res, setRes] = useState<any>(null);

  const dispatch = useDispatch();

  const [userSingUp] = useUserSingUpMutation();

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const res: any = await userSingUp(values);

      if (res?.data?.accessToken) {
        dispatch(onClose());

        form.reset();
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success("User logged in successfully!");
        window.location.href = "/";
      } else {
        toast.error(res?.error);
        setRes(res?.error);
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className=" md:w-[70%] grid grid-flow-row  auto-rows-max gap-2">
        <div className="h-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold text-center">Sign up</h1>

          <p className="text-xs text-slate-400">
            Sign up to access your account
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Your name <span className="text-red-600">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="User Name" />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Your email <span className="text-red-600">*</span>
                  </FormLabel>

                  <FormControl>
                    <Input type="email" {...field} placeholder="Your Email" />
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
                  <FormLabel>
                    Your password <span className="text-red-600">*</span>
                  </FormLabel>
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

            <Button type="submit" className="w-full mt-4">
              Sing up
            </Button>
          </form>
          <p className="text-red-600 text-sm">{res}</p>
        </Form>

        <div className="flex justify-center items-center ">
          <p className="text-slate-400 text-sm">Already have an account?</p>
          <Button
            onClick={() => setToggleLogin("sing-in")}
            variant={"link"}
            // className="text-slate-800 hover:text-slate-600 text-sm"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
