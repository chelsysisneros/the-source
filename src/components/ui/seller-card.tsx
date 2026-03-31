import Link from 'next/link';
import Image from 'next/image';
import { Seller } from '@/types';
import { Star, MapPin } from 'lucide-react';

interface SellerCardProps {
  seller: Seller;
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <Link
      href={`/sellers/${seller.slug}`}
      className="group block p-6 rounded-xl border border-[#E8DCC8] hover:border-[#C67C5B]/40 hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={seller.avatar}
            alt={seller.name}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div>
          <h3 className="font-serif text-[#3C2415] text-lg group-hover:underline underline-offset-2">
            {seller.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-[#8B7355]">
            <MapPin className="w-3.5 h-3.5" />
            {seller.location}
          </div>
        </div>
      </div>
      <p className="text-sm text-[#6B5738] line-clamp-2 mb-4">{seller.bio}</p>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-[#D4A853]">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium text-[#3C2415]">{seller.rating}</span>
          <span className="text-[#8B7355]">({seller.reviewCount})</span>
        </div>
        <span className="text-[#8B7355]">{seller.productCount} items</span>
      </div>
    </Link>
  );
}
