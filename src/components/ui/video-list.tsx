import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export interface VideoProp {
  id: string;
  title: string;
  url: string;
  duration: string;
  date: string;
}

type VideoListProp = {
  videos: VideoProp[];
  category: "user" | "community";
};

const VideoList = ({ videos, category }: VideoListProp) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card
          key={video.id}
          className="overflow-hidden bg-sage-800 shadow-none hover:ring-2 hover:ring-sage-700"
        >
          <CardContent className="p-0">
            <Link href={`/${category}/${video.id}`}>
              <div className="aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"></div>
                <img
                  src={video.url}
                  alt={`Thumbnail for ${video.title}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-4 text-white">
                <h2 className="text-lg">{video.title}</h2>
                <p className="text-sage-50 text-sm">{video.date}</p>
              </div>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default VideoList;
