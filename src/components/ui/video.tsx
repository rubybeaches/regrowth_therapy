import { Card, CardContent } from "@/components/ui/card";
import { VideoProp } from "./video-list";
import Link from "next/link";

const Video = ({ video }: { video: VideoProp }) => {
  return (
    <main className="bg-sage-700 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto mb-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            <Link id="videoBack" className="text-sage-50" href="/video-library">
              <span>&#8592;</span> Video Library
            </Link>
          </h1>
        </div>
        <h1 className="text-3xl font-bold text-white">{video.title}</h1>
      </div>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-lg m-2 text-sage-50">from: {video.date}</h2>
        <Card className="overflow-hidden bg-sage-800 shadow-none">
          <CardContent className="p-0">
            <div className="aspect-video relative">
              <img
                src={video.url}
                alt={`Thumbnail for ${video.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="text-white mt-8">
          <h2 className="text-2xl">Summary</h2>
          <p className="text-sage-50 text-base">summary text</p>
        </div>
      </section>
    </main>
  );
};

export default Video;
