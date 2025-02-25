import Link from "next/link";
import VideoList from "@/components/ui/video-list";

// Mock data for videos
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

const Page = () => {
  return (
    <main className="bg-sage-700 p-8 text-sage-800">
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-white">
          <Link id="videoBack" className="text-sage-50" href="/video-library">
            <span>&#8592;</span> Video Library
          </Link>
        </h1>
      </div>

      {/* Community Videos */}
      <section className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Community Videos
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <VideoList videos={communityVideos} category="community" />
        </div>
      </section>
    </main>
  );
};

export default Page;
