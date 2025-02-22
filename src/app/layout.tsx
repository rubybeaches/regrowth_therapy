import type { Metadata } from "next";
import { Caladea, Tinos, MonteCarlo } from "next/font/google";
import "./globals.css";

const caladea = Caladea({
  variable: "--font-caladea",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const tinos = Tinos({
  variable: "--font-tinos",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const script = MonteCarlo({
  variable: "--font-monte",
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virtual Hypnotherapy & Energy Healing | Heal from Anywhere",
  description:
    "Experience powerful transformation from the comfort of your home. Virtual hypnotherapy & energy healing for stress, sleep, anxiety, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`min-h-screen bg-sage-100 ${caladea.variable} ${tinos.variable} ${script.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
