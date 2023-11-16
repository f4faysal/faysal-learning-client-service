"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import ImageUpload from "@/components/image-upload";
import SelectInputField from "@/components/select-input-fild";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormHading from "@/components/ui/form-hading";
import { Input } from "@/components/ui/input";
import { bloodGroupsOption, genderOptionObject } from "@/constants/global";
import { useCreateHomeOwnerMutation } from "@/redux/api/usersApi";
import { homeOwnerFormSchema } from "@/schemas/home-owner";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SingUpOwner = () => {
  const router = useRouter();
  const [createHomeOwnerMutation] = useCreateHomeOwnerMutation();

  const form = useForm<z.infer<typeof homeOwnerFormSchema>>({
    resolver: zodResolver(homeOwnerFormSchema),
    defaultValues: {},
  });

  const onSubmit = async (values: z.infer<typeof homeOwnerFormSchema>) => {
    try {
      console.log(values);
      const res: any = await createHomeOwnerMutation(values);
      console.log(res);
      if (res?.data?.accessToken) {
        form.reset();
        router.push("/");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        toast.success("homeOwner created successfully");
      } else {
        toast(res?.error);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };
  return (
    <div className="w-10/12 mx-auto bg-[#f8fafc] py-10 flex items-center justify-center">
      <div className="bg-white shadow-lg border rounded-md px-4 py-8 grid grid-flow-row  auto-rows-max gap-2">
        <div className="h-20 flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold text-center">
            Sign up for Home-owner
          </h1>

          <p className="text-xs text-slate-400">
            Please fill up the form to create a new account rent or sell your
            property. 
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Personal Info */}
            <div className="border px-3 py-5 rounded-md shadow">
              <FormHading title="Personal Information" />
              <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="">
                  <FormField
                    control={form.control}
                    name="homeOwner.name.firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="First Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="homeOwner.name.middleName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Middle Name</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Middle Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.name.lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Last Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="exmpole@gmail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Det of Birth</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Select Date"
                            {...field}
                            type="date"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.contactNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact No</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Contact No"
                            type="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.emergencyContactNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Emergency Contact No</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Emergency Contact No"
                            {...field}
                            type="tel"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* Basic Info */}
            <div className="border mt-3 px-3 py-5 rounded-md shadow">
              <FormHading title="Basic Information" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                  <FormField
                    control={form.control}
                    name="homeOwner.gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <FormControl>
                          <SelectInputField
                            field={field}
                            placeholder="Select a gender"
                            mapData={genderOptionObject}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="homeOwner.bloodGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Blood Group</FormLabel>
                        <FormControl>
                          <SelectInputField
                            field={field}
                            placeholder="Select a Blood Group"
                            mapData={bloodGroupsOption}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.presentAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Present Address</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Street, City, Country"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=".">
                  <FormField
                    control={form.control}
                    name="homeOwner.permanentAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Permanent Address</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Street, City, Country"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            {/* User info */}
            <div className="border mt-3 px-3 py-5 rounded-md shadow">
              <FormHading title="User Information" />
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="homeOwner.profileImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={field.value ? [field.value] : []}
                          // disabled={loading}
                          onChange={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className=".">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="Password"
                            {...field}
                            type="password"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=".">
                  <FormField
                    control={form.control}
                    name="nidNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>National Identity Card No</FormLabel>
                        <FormControl>
                          <Input
                            // disabled={loading}
                            placeholder="National Identity Card No"
                            type="number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 space-x-2 flex items-center justify-center w-full">
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>

        <div className="flex justify-center items-center gap-2">
          <p className="text-slate-400 text-sm"> Already have an account?</p>
          <Link
            href="/sign-in"
            className="text-slate-800 hover:text-slate-600 text-sm"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingUpOwner;
