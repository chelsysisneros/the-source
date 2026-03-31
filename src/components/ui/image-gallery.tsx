'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[#F5F0E8]">
        <Image
          src={images[selectedIndex]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                'relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer',
                i === selectedIndex
                  ? 'border-[#C67C5B] ring-1 ring-[#C67C5B]/30'
                  : 'border-transparent opacity-60 hover:opacity-100'
              )}
            >
              <Image
                src={img}
                alt={`${alt} - view ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
