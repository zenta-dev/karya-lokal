"use client";
import { Image } from "database";
import ImageNext from "next/image";
import { useState } from "react";

// props
export interface ImageCardProps {
  images: Image[];
}

// component
export default function ImageCard({ images }: ImageCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <div className="relative h-72 w-full">
      <ImageNext
        src={images[activeImageIndex].url}
        alt={images[activeImageIndex].id}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveImageIndex((prevIndex) =>
              prevIndex > 0 ? prevIndex - 1 : images.length - 1
            );
          }}
        >
          ❮
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveImageIndex((prevIndex) =>
              prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
          }}
        >
          ❯
        </a>
      </div>
    </div>
  );
}
