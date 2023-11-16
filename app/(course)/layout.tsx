// import { Sidebar } from "./_components/sidebar";

import RootNavBar from "@/components/RttoNavBar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="">
        <RootNavBar />
      </div>
      {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div> */}
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
