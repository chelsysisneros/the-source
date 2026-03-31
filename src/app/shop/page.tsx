'use client';

import { useState } from 'react';
import { products } from '@/data';
import { filterProducts } from '@/data';
import { FilterState } from '@/types';
import { ProductCard } from '@/components/ui/product-card';
import { FilterSidebar } from '@/components/ui/filter-sidebar';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { SlidersHorizontal } from 'lucide-react';

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({ sortBy: 'newest' });
  const [filterOpen, setFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = filterProducts(products, filters);
  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop All' }]} />

      <div className="flex items-end justify-between mt-6 mb-8">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-1">Shop All</h1>
          <p className="text-[#8B7355]">{filtered.length} pieces</p>
        </div>
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
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="px-8 py-3 border-2 border-[#3C2415] text-[#3C2415] rounded-lg font-medium hover:bg-[#3C2415] hover:text-[#FDF8F0] transition-colors cursor-pointer"
              >
                Load More
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-[#3C2415] mb-2">No pieces found</p>
              <p className="text-[#8B7355]">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
