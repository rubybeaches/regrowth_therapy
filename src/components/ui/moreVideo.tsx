import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const MoreVideo = ({
  category,
  totalVideos,
}: {
  category: "community" | "user";
  totalVideos: number;
}) => {
  return (
    <Card className="overflow-hidden bg-sage-700 shadow-none hover:ring-2 hover:ring-sage-100">
      <CardContent className="p-0">
        <Link href={`/${category}`}>
          <div className="aspect-video relative bg-sage-100 flex">
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-sage-50 bg-opacity-50"></div>
            <h2 className="text-lg text-center text-white m-auto">See More</h2>
          </div>
          <div className="p-4 text-white">
            <h2 className="text-lg">See all {category} videos</h2>
            <p className="text-sage-50 text-sm">{totalVideos} videos</p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

export default MoreVideo;
