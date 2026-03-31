import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-[#8B7355]">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
          {item.href ? (
            <Link href={item.href} className="hover:text-[#3C2415] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#3C2415] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
