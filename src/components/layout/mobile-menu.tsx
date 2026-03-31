'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { categories } from '@/data/categories';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={cn(
          'absolute top-0 left-0 h-full w-80 bg-[#FDF8F0] shadow-2xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-[#E8DCC8]">
          <span className="font-serif text-lg tracking-[0.1em] text-[#3C2415] font-bold">
            THE SOURCE
          </span>
          <button onClick={onClose} className="p-1 cursor-pointer">
            <X className="w-5 h-5 text-[#6B5738]" />
          </button>
        </div>

        <nav className="p-6 space-y-6">
          <div className="space-y-3">
            <Link
              href="/shop"
              onClick={onClose}
              className="block text-lg text-[#3C2415] font-medium hover:text-[#C67C5B] transition-colors"
            >
              Shop All
            </Link>
            <Link
              href="/sellers"
              onClick={onClose}
              className="block text-lg text-[#3C2415] font-medium hover:text-[#C67C5B] transition-colors"
            >
              Sellers
            </Link>
            <Link
              href="/about"
              onClick={onClose}
              className="block text-lg text-[#3C2415] font-medium hover:text-[#C67C5B] transition-colors"
            >
              About
            </Link>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#8B7355] mb-3 font-semibold">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/shop/${cat.slug}`}
                  onClick={onClose}
                  className="block text-[#6B5738] hover:text-[#C67C5B] transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8DCC8]">
            <Link
              href="/about"
              onClick={onClose}
              className="block w-full py-3 text-center bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium hover:bg-[#B06C4B] transition-colors"
            >
              Sell With Us
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
