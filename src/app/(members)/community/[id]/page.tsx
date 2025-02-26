import { ClientPage } from "./clientPage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const videoID = (await params).id;
  // only need to look up video id cause community is open to everyone
  return <ClientPage videoID={videoID} />;
}
