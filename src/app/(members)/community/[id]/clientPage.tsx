"use client";
import Video from "@/components/ui/video";
import { useCommunityVideoContext } from "@/lib/providers";

export function ClientPage({ videoID }: { videoID: string }) {
  const communityVideo = useCommunityVideoContext().filter(
    (video) => video.id == videoID
  )[0];
  return <Video video={communityVideo} />;
}
