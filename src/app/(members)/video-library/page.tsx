import { Button } from "@/components/ui/button";
import VideoList, { VideoProp } from "@/components/ui/video-list";

// Mock data for videos
const userVideos: VideoProp[] = [
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
    duration: "52:40",
    url: "/thumbnail.png?height=180&width=320",
    date: "Feb 30th, 2025",
  },
];

const communityVideos = [
  {
    id: "c1",
    title: "Meditation Basics",
    duration: "15:30",
    url: "/thumbnail.png?height=180&width=320",
    date: "Jan 3th, 2025",
  },
  {
    id: "c2",
    title: "Stress Relief Techniques",
    duration: "22:45",
    url: "/thumbnail.png?height=180&width=320",
    date: "Jan 15th, 2025",
  },
  {
    id: "c3",
    title: "Mindfulness Practice",
    duration: "18:20",
    url: "/thumbnail.png?height=180&width=320",
    date: "Jan 27th, 2025",
  },
  {
    id: "c4",
    title: "Guided Relaxation",
    duration: "25:10",
    url: "/thumbnail.png?height=180&width=320",
    date: "Feb 3rd, 2025",
  },
];

const VideoLibrary = () => {
  return (
    <main className="bg-sage-800 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Video Library</h1>
          <Button variant="outline">Logout</Button>
        </div>
      </div>

      {/* User Only Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-white m-4 ">
          Your Personal Sessions
        </h2>
        <VideoList videos={userVideos} category="user" />
      </section>

      {/* Community Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <h2 className="text-2xl font-bold text-white m-4 ">Community Videos</h2>
        <VideoList videos={communityVideos} category="community" />
      </section>
    </main>
  );
};

export default VideoLibrary;
