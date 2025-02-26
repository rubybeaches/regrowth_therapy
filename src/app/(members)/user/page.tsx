"use client";
import Link from "next/link";
import VideoList, { VideoProp } from "@/components/ui/video-list";
import { useUserVideoContext } from "@/lib/providers";

const userVideoLibrary = () => {
  const userVideos: VideoProp[] = useUserVideoContext();
  return (
    <main className="bg-sage-700 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white">
          <Link id="videoBack" className="text-sage-50" href="/video-library">
            <span>&#8592;</span> Video Library
          </Link>
        </h1>
      </div>

      {/* User Only Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Personal Sessions
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoList videos={userVideos} category="user" />
        </div>
      </section>
    </main>
  );
};

export default userVideoLibrary;
