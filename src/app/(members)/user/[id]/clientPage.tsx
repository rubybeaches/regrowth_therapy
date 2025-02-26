"use client";
import Video from "@/components/ui/video";
import { useUserVideoContext } from "@/lib/providers";

export function ClientPage({ videoID }: { videoID: string }) {
  // get user auth from middelware?
  // use auth plus video id to grab the user video to dsplay
  // My Post: {videoID}
  const userVideo = useUserVideoContext().filter(
    (video) => video.id == videoID
  )[0];
  return <Video video={userVideo} />;
}
