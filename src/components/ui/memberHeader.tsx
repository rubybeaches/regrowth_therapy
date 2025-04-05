import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MemberHeader = () => {
  return (
    <header className="bg-sage-700 text-white p-4">
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
          <Link href="">
            <Button className="bg-sage-700 text-white hover:bg-sage-100 text-base rounded-full">
              Book Session
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default MemberHeader;
