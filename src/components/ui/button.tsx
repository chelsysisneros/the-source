import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer',
        variant === 'primary' &&
          'bg-[#C67C5B] text-[#FDF8F0] hover:bg-[#B06C4B] active:bg-[#9A5C3B]',
        variant === 'secondary' &&
          'border-2 border-[#3C2415] text-[#3C2415] hover:bg-[#3C2415] hover:text-[#FDF8F0]',
        variant === 'ghost' &&
          'text-[#3C2415] hover:underline underline-offset-4',
        size === 'sm' && 'px-4 py-2 text-sm rounded-md',
        size === 'md' && 'px-6 py-3 text-sm rounded-lg',
        size === 'lg' && 'px-8 py-4 text-base rounded-lg',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
