import Video from "@/components/ui/video";
import { communityVideos } from "@/lib/mock";

export function ClientPage({ videoID }: { videoID: string }) {
  const communityVideo = communityVideos.filter(
    (video) => video.id == videoID
  )[0];
  return <Video video={communityVideo} />;
}
