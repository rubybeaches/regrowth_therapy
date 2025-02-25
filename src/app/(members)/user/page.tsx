import Link from "next/link";
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

const userVideoLibrary = () => {
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
