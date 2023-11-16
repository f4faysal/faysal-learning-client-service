import { createUploadthing, type FileRouter } from "uploadthing/next";

import { getUserInfo } from "@/services/auth.service";

const f = createUploadthing();

const handleAuth = () => {
  const { userId, role }: any = getUserInfo();

  if (!userId && role === "Instructor") throw new Error("Unauthorized");
  return { userId };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
