import Video from "@/components/ui/video";

// Mock data for video
const userVideo = {
  id: "1",
  title: "Session 1: Introduction to Mindfulness",
  url: "/thumbnail.png?height=180&width=320",
  duration: "52:40",
  date: "Feb 3th, 2025",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const videoID = (await params).id;
  // get user auth from middelware?
  // use auth plus video id to grab the user video to dsplay
  // My Post: {videoID}
  return <Video video={userVideo} />;
}
