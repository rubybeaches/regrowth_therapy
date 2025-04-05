"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/globals";
import { useState } from "react";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
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
        <nav className="flex gap-2 relative">
          <div>
            <Button
              className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full"
              onMouseEnter={() => setShowServices(true)}
            >
              Services
            </Button>
            <ul
              className={`absolute p-6 bg-sage-700 rounded-lg w-[250px] z-[99] ${
                showServices ? "block" : "hidden"
              }`}
              onMouseLeave={() => setShowServices(false)}
            >
              {services.map((service, index) => (
                <li key={index} className="text-base">
                  <Link href={service.link}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Button className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full">
            <Link href="/faq">FAQ</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
