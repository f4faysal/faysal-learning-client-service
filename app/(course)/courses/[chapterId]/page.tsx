"use client";

import { Banner } from "@/components/banner";
import { Preview } from "@/components/preview";
// import { getChapter } from "@/actions/get-chapter";

import { useCourseQuery } from "@/redux/api/courseApi";
import { getUserInfo } from "@/services/auth.service";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { File } from "lucide-react";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { CourseProgressButton } from "./_components/course-progress-button";
import { VideoPlayer } from "./_components/video-player";

const ChapterIdPage = ({
  params,
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId }: any = getUserInfo();

  // const { data, isLoading } = useChapterQuery(params.chapterId);
  const { data, isLoading } = useCourseQuery(params.chapterId);

  const course = data;

  const chapter = data?.chapters.find(
    (chapter: any) => chapter.courseId === params.chapterId
  );
  const attachments = chapter?.attachments || [];

  console.log(chapter);

  // if (!userId) {
  //   return redirect("/");
  // }

  // if (!chapter || !course) {
  //   return redirect("/");
  // }

  // const isLocked = !chapter.isFree;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {false && (
        <Banner variant="success" label="You already completed this chapter." />
      )}
      {true && (
        <Banner
          variant="warning"
          label="You need to purchase this course to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={params.chapterId}
            title={chapter.title || ""}
            courseId={course?.courseId || ""}
            nextChapterId={""}
            playbackId={""}
            isLocked={false}
            completeOnEnd={false}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
            {false ? (
              <CourseProgressButton
                chapterId={params.chapterId}
                courseId={course?.courseId}
                nextChapterId={""}
                isCompleted={true}
              />
            ) : (
              <CourseEnrollButton
                courseId={params.courseId}
                price={course.price!}
              />
            )}
          </div>
          <Separator />
          <div>
            <Preview value={chapter.description!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachment: any) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterIdPage;
