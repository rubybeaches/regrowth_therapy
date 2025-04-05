import { Button } from "@/components/ui/button";
import MemberFooter from "@/components/ui/memberFooter";
import MemberHeader from "@/components/ui/memberHeader";
import Image from "next/image";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-sage-700">
      <MemberHeader />
      {children}
      <MemberFooter />
    </div>
  );
}
