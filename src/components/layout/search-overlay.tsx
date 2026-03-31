'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { searchProducts } from '@/data';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const results = query.length > 1 ? searchProducts(query).slice(0, 6) : [];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 bg-[#FDF8F0]/98 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-2xl mx-auto pt-24 px-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-[#F5F0E8] rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6 text-[#3C2415]" />
        </button>

        <div className="relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-[#8B7355]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for treasures..."
            className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-[#E8DCC8] focus:border-[#C67C5B] outline-none font-serif text-2xl text-[#3C2415] placeholder:text-[#C4B9A8] transition-colors"
          />
        </div>

        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <p className="text-sm text-[#8B7355]">{results.length} results</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {results.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  onClick={onClose}
                  className="group"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-[#F5F0E8] mb-2">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="200px"
                    />
                  </div>
                  <h3 className="text-sm text-[#3C2415] line-clamp-1 group-hover:underline">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#3C2415]">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-[#8B7355]">No results found for &ldquo;{query}&rdquo;</p>
            <p className="text-sm text-[#C4B9A8] mt-1">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}
