"use client";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-2xl font-bold text-white m-4">Video not available</h2>
      <Link href="/video-library" className="underline text-sage-50">
        Return to Video Library
      </Link>
    </div>
  );
}
