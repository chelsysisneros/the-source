'use client';

import { useState, use } from 'react';
import { categories, getProductsByCategory, filterProducts } from '@/data';
import { FilterState } from '@/types';
import { ProductCard } from '@/components/ui/product-card';
import { FilterSidebar } from '@/components/ui/filter-sidebar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { SlidersHorizontal } from 'lucide-react';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = use(params);
  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = getProductsByCategory(slug);

  const [filters, setFilters] = useState<FilterState>({ sortBy: 'newest' });
  const [filterOpen, setFilterOpen] = useState(false);

  const filtered = filterProducts(categoryProducts, filters);

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-[#3C2415]">Category not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Category Hero */}
      <div
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: `url(${category.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#3C2415]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#FDF8F0] mb-3">
            {category.name}
          </h1>
          <p className="text-[#E8DCC8] max-w-lg mx-auto">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: category.name },
          ]}
        />

        <div className="flex items-end justify-between mt-6 mb-8">
          <p className="text-[#8B7355]">{filtered.length} pieces</p>
          <button
            onClick={() => setFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 border border-[#E8DCC8] rounded-lg text-sm text-[#6B5738] cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        <div className="flex gap-12">
          <FilterSidebar
            filters={filters}
            onFilterChange={setFilters}
            isOpen={filterOpen}
            onClose={() => setFilterOpen(!filterOpen)}
          />

          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[#3C2415] mb-2">No pieces found</p>
                <p className="text-[#8B7355]">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
