"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageItem {
  src: string
  alt: string
  label?: string
}

interface ImageCarouselProps {
  images: ImageItem[]
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const visibleCount = isMobile ? 1 : 3

  const maxIndex = Math.max(0, images.length - visibleCount)

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const getTransform = () => {
    if (isMobile) {
      return `translateX(-${currentIndex * 100}%)`
    }
    // On desktop, each image takes up 33.333% plus gap
    const imageWidth = 100 / visibleCount
    return `translateX(-${currentIndex * imageWidth}%)`
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out md:gap-8 gap-0"
          style={{
            transform: getTransform(),
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full md:min-w-[calc(33.333%-1.333rem)] flex-shrink-0 px-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                {/* Green dot indicator */}
                <div className="absolute left-2 top-2 z-10 h-2 w-2 rounded-full bg-[#7FFF00]" />

                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />

                <div className="absolute bottom-2 left-4 right-4 flex items-center gap-2">
                  <button className="text-[#00BFFF] hover:text-[#00BFFF]/80">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M8 6L3 9V3L8 6Z" />
                    </svg>
                  </button>
                  <div className="relative h-0.5 flex-1 bg-gray-600">
                    <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00BFFF]" />
                  </div>
                  <button className="text-[#00BFFF] hover:text-[#00BFFF]/80">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M4 6L9 3V9L4 6Z" />
                    </svg>
                  </button>
                </div>
              </div>

              {image.label && (
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium text-[#7FFF00]">{image.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {images.length > visibleCount && (
        <>
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#7FFF00] hover:text-[#7FFF00]/80 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-12 w-12 md:h-16 md:w-16 stroke-[3]" />
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-[#7FFF00] hover:text-[#7FFF00]/80 transition-colors z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            aria-label="Next image"
          >
            <ChevronRight className="h-12 w-12 md:h-16 md:w-16 stroke-[3]" />
          </button>
        </>
      )}

      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, index) => {
          const isVisible = index >= currentIndex && index < currentIndex + visibleCount
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                isVisible ? "bg-[#7FFF00]" : "bg-gray-600 hover:bg-gray-500",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}