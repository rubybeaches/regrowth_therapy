"use client";
import VideoList, { VideoProp } from "@/components/ui/video-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MoreVideo from "@/components/ui/moreVideo";
import { useCommunityVideoContext, useUserVideoContext } from "@/lib/providers";

const VideoLibrary = () => {
  const userVideos = useUserVideoContext();
  const communityVideos = useCommunityVideoContext();
  return (
    <main className="bg-sage-700 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Video Library</h1>
          <Button variant="outline">Logout</Button>
        </div>
      </div>

      {/* User Only Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white m-4">
            Your Personal Sessions
          </h2>
          <Link href="/user">
            <Button
              variant="link"
              className="text-sage-50 hover:text-white text-base"
            >
              See all videos <span className="ml-2">&#8250;</span>
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoList videos={userVideos.slice(0, 5)} category="user" />
          <MoreVideo category="user" totalVideos={userVideos.length} />
        </div>
      </section>

      {/* Community Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white m-4 ">
            Community Videos
          </h2>
          <Link href="/community">
            <Button
              variant="link"
              className="text-sage-50 hover:text-white text-base"
            >
              See all videos <span className="ml-2">&#8250;</span>
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoList videos={communityVideos} category="community" />
          <MoreVideo
            category="community"
            totalVideos={communityVideos.length}
          />
        </div>
      </section>
    </main>
  );
};

export default VideoLibrary;
