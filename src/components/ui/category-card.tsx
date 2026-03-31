import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity group-hover:from-black/50" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-serif text-white text-xl mb-1">{category.name}</h3>
        <p className="text-white/70 text-sm">{category.productCount} pieces</p>
      </div>
    </Link>
  );
}
