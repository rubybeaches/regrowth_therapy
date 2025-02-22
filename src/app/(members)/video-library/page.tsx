import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data for videos
const videos = [
  {
    id: "1",
    title: "Session 1: Introduction to Mindfulness",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 3th, 2025",
  },
  {
    id: "2",
    title: "Session 2: Stress Management Techniques",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 9th, 2025",
  },
  {
    id: "3",
    title: "Session 3: Building Healthy Relationships",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 16th, 2025",
  },
  {
    id: "4",
    title: "Session 4: Overcoming Anxiety",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 17th, 2025",
  },
  {
    id: "5",
    title: "Session 5: Positive Thinking Strategies",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 25th, 2025",
  },
  {
    id: "6",
    title: "Session 6: Goal Setting and Achievement",
    url: "/thumbnail.png?height=180&width=320",
    duration: "52:40",
    date: "Feb 30th, 2025",
  },
];

const VideoLibrary = () => {
  return (
    <main className="bg-sage-800 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-white">
            Your Session Library
          </h1>
          <Button variant="outline">Logout</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden bg-sage-800 shadow-none hover:ring-2 hover:ring-sage-700"
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-sage-50">
                  <img
                    src={video.url}
                    alt={`Thumbnail for ${video.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-white">
                  <h2 className="text-lg">{video.title}</h2>
                  <p className="text-sage-50">{video.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VideoLibrary;
