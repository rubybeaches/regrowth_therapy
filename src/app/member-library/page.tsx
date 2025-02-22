import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data for videos
const videos = [
  {
    id: "1",
    title: "Session 1: Introduction to Mindfulness",
    url: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "2",
    title: "Session 2: Stress Management Techniques",
    url: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "3",
    title: "Session 3: Building Healthy Relationships",
    url: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "4",
    title: "Session 4: Overcoming Anxiety",
    url: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "5",
    title: "Session 5: Positive Thinking Strategies",
    url: "/placeholder.svg?height=180&width=320",
  },
  {
    id: "6",
    title: "Session 6: Goal Setting and Achievement",
    url: "/placeholder.svg?height=180&width=320",
  },
];

const VideoLibrary = () => {
  return (
    <main className="bg-cream-50 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Your Session Library</h1>
          <Button variant="outline">Logout</Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-sage-50">
                  {/*
                  <img
                    src={video.url || ""}
                    alt={`Thumbnail for ${video.title}`}
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
                <div className="p-4">
                  <Button className="w-full bg-sage-700 hover:bg-sage-800">
                    Watch Session
                  </Button>
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
