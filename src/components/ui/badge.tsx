import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'sale' | 'featured' | 'condition';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full',
        variant === 'default' && 'bg-[#F5F0E8] text-[#6B5738]',
        variant === 'sale' && 'bg-[#C67C5B] text-white',
        variant === 'featured' && 'bg-[#3C2415] text-[#FDF8F0]',
        variant === 'condition' && 'bg-[#8B9E7E]/20 text-[#5A6B4F]',
        className
      )}
    >
      {children}
    </span>
  );
}
