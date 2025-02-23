import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-sage-800 text-white py-8">
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
            <Button className="bg-sage-800 text-white hover:bg-sage-700 text-base rounded-full">
              Services
            </Button>
            <Button className="bg-sage-800 text-white hover:bg-sage-700 text-base rounded-full">
              FAQ
            </Button>
          </nav>
        </div>
      </header>
      {children}
      <div className="container mx-auto p-4 text-center text-white bg-sage-800">
        <p>© 2025 Regrowth Therapy & Healing LLC. All Rights Reserved</p>
      </div>
    </>
  );
}
