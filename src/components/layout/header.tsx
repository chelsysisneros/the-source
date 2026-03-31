'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { cn } from '@/lib/utils';
import { MobileMenu } from './mobile-menu';
import { SearchOverlay } from './search-overlay';

export function Header() {
  const { toggleCart, cartCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[#FDF8F0]/95 backdrop-blur-md shadow-sm'
            : 'bg-[#FDF8F0]'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 cursor-pointer"
            >
              <Menu className="w-5 h-5 text-[#3C2415]" />
            </button>

            {/* Left nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/shop"
                className="text-sm text-[#6B5738] hover:text-[#3C2415] transition-colors font-medium"
              >
                Shop
              </Link>
              <Link
                href="/sellers"
                className="text-sm text-[#6B5738] hover:text-[#3C2415] transition-colors font-medium"
              >
                Sellers
              </Link>
              <Link
                href="/about"
                className="text-sm text-[#6B5738] hover:text-[#3C2415] transition-colors font-medium"
              >
                About
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="font-serif text-xl md:text-2xl tracking-[0.15em] text-[#3C2415] font-bold">
                THE SOURCE
              </h1>
            </Link>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:bg-[#F5F0E8] rounded-full transition-colors cursor-pointer"
              >
                <Search className="w-5 h-5 text-[#3C2415]" />
              </button>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-[#F5F0E8] rounded-full transition-colors relative cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-[#3C2415]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#C67C5B] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <Link
                href="/about"
                className="hidden md:inline-flex px-4 py-2 text-sm font-medium border border-[#3C2415] text-[#3C2415] rounded-lg hover:bg-[#3C2415] hover:text-[#FDF8F0] transition-colors"
              >
                Sell With Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16 md:h-20" />

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
