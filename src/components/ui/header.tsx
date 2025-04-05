"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/globals";
import { useRef, useState } from "react";

const Header = () => {
  const [showServices, setShowServices] = useState(false);
  const showMenuRef = useRef<any>();

  const toggleServicMenu = (display: boolean) => {
    if (showMenuRef) {
      clearTimer();
    }
    setShowServices(display);
  };

  const setTimer = () => {
    showMenuRef.current = setTimeout(() => {
      setShowServices(() => false);
    }, 1000);
  };

  const clearTimer = () => {
    clearTimeout(showMenuRef.current);
  };

  return (
    <header className="bg-sage-100 text-white py-4">
      <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center text-lg">
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
        <nav className="flex gap-2 relative">
          <div>
            <Button
              className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full"
              onMouseEnter={() => toggleServicMenu(true)}
              onMouseLeave={() => setTimer()}
            >
              Services
            </Button>
            <ul
              className={`absolute p-4 bg-sage-700 rounded-lg w-[250px] z-[99] right-[0px] ${
                showServices ? "block" : "hidden"
              }`}
              onMouseEnter={() => clearTimer()}
              onMouseLeave={() => toggleServicMenu(false)}
            >
              {services.map((service, index) => (
                <li key={index} className="text-base p-1">
                  <Link href={service.link}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            className="bg-sage-100 hover:bg-sage-700 text-white text-base rounded-full"
            onMouseEnter={() => toggleServicMenu(false)}
          >
            <Link href="/faq">FAQ</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
