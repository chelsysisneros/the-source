import Link from 'next/link';
import { categories } from '@/data/categories';

export function Footer() {
  return (
    <footer className="bg-[#3C2415] text-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-xl tracking-[0.15em] text-[#FDF8F0] font-bold mb-4">
              THE SOURCE
            </h2>
            <p className="text-sm text-[#C4B9A8] leading-relaxed mb-6">
              Curated vintage finds for the modern home. Every piece tells a story worth continuing.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#FDF8F0] font-semibold mb-4">
              Shop
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/shop/${cat.slug}`}
                    className="text-sm text-[#C4B9A8] hover:text-[#FDF8F0] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#FDF8F0] font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-[#C4B9A8] hover:text-[#FDF8F0] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="text-sm text-[#C4B9A8] hover:text-[#FDF8F0] transition-colors">
                  Our Sellers
                </Link>
              </li>
              <li>
                <span className="text-sm text-[#C4B9A8]">Blog</span>
              </li>
              <li>
                <span className="text-sm text-[#C4B9A8]">Careers</span>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#FDF8F0] font-semibold mb-4">
              Help
            </h3>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-[#C4B9A8]">FAQ</span></li>
              <li><span className="text-sm text-[#C4B9A8]">Shipping & Delivery</span></li>
              <li><span className="text-sm text-[#C4B9A8]">Returns & Exchanges</span></li>
              <li><span className="text-sm text-[#C4B9A8]">Contact Us</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#5C3A22] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8B7355]">
            &copy; {new Date().getFullYear()} The Source. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#8B7355]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
