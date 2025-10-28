"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ResponsiveImageProps {
  desktop: string;
  mobile: string | string[]; // allow one or multiple images for mobile
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ResponsiveImage({
  desktop,
  mobile,
  alt,
  className = "",
}: ResponsiveImageProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // SSR-safe check
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    // Set initial value
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // While detecting, don't render anything (prevents hydration mismatch)
  if (isMobile === null) return null;

  // Mobile: can be single image or array of images
  const mobileImages = Array.isArray(mobile) ? mobile : [mobile];

  return (
    <div className={`w-full ${className} relative h-full`}>
      {isMobile ? (
        <div className="flex flex-col gap-2">
          {mobileImages.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-contain"
            />
          ))}
        </div>
      ) : (
        <Image
          src={desktop}
          alt={alt}
          fill
          className="object-contain"
        />
      )}
    </div>
  );
}
