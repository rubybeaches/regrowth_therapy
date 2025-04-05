import VideoList from "@/components/ui/video-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MoreVideo from "@/components/ui/moreVideo";
import { communityVideos, userVideos } from "@/lib/globals";

const VideoLibrary = () => {
  return (
    <main className="bg-sage-700 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Video Library</h1>
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
              className={`text-sage-50 hover:text-white text-base ${
                userVideos.length > 0 ? "" : "hidden"
              }`}
            >
              See all videos <span className="ml-2">&#8250;</span>
            </Button>
          </Link>
        </div>
        {userVideos.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VideoList videos={userVideos.slice(0, 5)} category="user" />
            <MoreVideo category="user" totalVideos={userVideos.length} />
          </div>
        ) : (
          <div className="container text-sage-50 mx-auto flex justify-center items-center">
            <p className="text-sage-50 text-center m-2 text-lg">
              Recordings available after your first session. Book your
              consultation today!
            </p>
          </div>
        )}
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
