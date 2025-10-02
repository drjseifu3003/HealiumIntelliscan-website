"use client"
import React from "react";

interface VideoPlayerProps {
  desktopSrc: string;   // desktop video file
  mobileSrc: string;    // mobile video file
  className?: string;   // optional styling
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ desktopSrc, mobileSrc, className = "" }) => {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      {/* Mobile first */}
      <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />
      {/* Desktop */}
      <source src={desktopSrc} media="(min-width: 769px)" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;