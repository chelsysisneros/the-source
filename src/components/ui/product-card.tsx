import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Badge } from './badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#F5F0E8] mb-3">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.featured && <Badge variant="featured">Editor&apos;s Pick</Badge>}
          {hasDiscount && <Badge variant="sale">Sale</Badge>}
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-serif text-[#3C2415] text-sm leading-snug line-clamp-2 group-hover:underline underline-offset-2">
          {product.name}
        </h3>
        <p className="text-xs text-[#8B7355]">{product.sellerName}</p>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#3C2415]">
            {formatPrice(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-[#8B7355] line-through">
              {formatPrice(product.originalPrice!)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
