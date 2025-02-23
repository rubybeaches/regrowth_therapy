import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-sage-100 text-white py-4">
      <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center text-lg">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/butterfly_logo_white.png"
            alt="Butterfly logo"
            width={36}
            height={36}
          />
          <span>Regrowth Therapy & Healing</span>
        </Link>
        <nav className="flex gap-2">
          <Button className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full">
            Services
          </Button>
          <Button className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full">
            FAQ
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
