import { Button } from "@/components/ui/button";
import { CommunityVideoContext, UserVideoContext } from "@/lib/providers";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-sage-700">
      <header className="bg-sage-700 text-white py-8">
        <div className="container max-w-6xl mx-auto flex justify-between items-center text-lg">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/butterfly_logo_white.png"
              alt="Butterfly logo"
              width={161}
              height={134}
              className="w-[36px] h-auto"
            />
            <span>Regrowth Therapy & Healing</span>
          </Link>
          <nav className="flex gap-2">
            <Link href="/video-library">
              <Button className="bg-sage-700 text-white hover:bg-sage-100 text-base rounded-full">
                Video Library
              </Button>
            </Link>
            <Link href="/video-library">
              <Button className="bg-sage-700 text-white hover:bg-sage-100 text-base rounded-full">
                Book Session
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <UserVideoContext>
        <CommunityVideoContext>{children}</CommunityVideoContext>
      </UserVideoContext>
      <div className="container m-auto p-4 text-center text-white">
        <p>© 2025 Regrowth Therapy & Healing LLC. All Rights Reserved</p>
      </div>
    </div>
  );
}
