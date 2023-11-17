import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome to the course app</h1>
          <p className="text-xl mt-4">This is a demo app for the course</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">How to use</h2>
          <p className="text-xl mt-4">
            This app is a demo app for the course. It uses a fake api to
            simulate a real api. You can use the following credentials to login:
          </p>
          <p className="text-xl mt-4">
            <strong>Instructor:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Email:</strong>
              <span className="ml-2">f4faysals@gmail.com</span>
            </li>
            <li>
              <strong>Password:</strong>
              <span className="ml-2">123456</span>
            </li>
          </ul>
          <p className="text-xl mt-4">
            <strong>Student:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Email:</strong>
              <span className="ml-2">
                your email (you can use any email to register)
              </span>
            </li>
            <li>
              <strong>Password:</strong>
              <span className="ml-2">
                strong password (you can use any password to register)
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full text-center mx-auto">
          <Button className="mt-8">
            <Link href="/search">Go to Learn</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default page;
