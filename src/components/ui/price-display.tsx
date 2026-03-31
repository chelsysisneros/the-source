import { formatPrice } from '@/lib/utils';
import { Badge } from './badge';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  className?: string;
}

export function PriceDisplay({ price, originalPrice, className }: PriceDisplayProps) {
  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <span className="text-lg font-semibold text-[#3C2415]">
        {formatPrice(price)}
      </span>
      {hasDiscount && (
        <>
          <span className="text-sm text-[#8B7355] line-through">
            {formatPrice(originalPrice)}
          </span>
          <Badge variant="sale">Sale</Badge>
        </>
      )}
    </div>
  );
}
