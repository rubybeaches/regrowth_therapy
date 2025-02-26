import { ClientPage } from "./clientPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const videoID = (await params).id;
  // get user auth from middelware?
  // use auth plus video id to grab the user video to dsplay
  return <ClientPage videoID={videoID} />;
}
