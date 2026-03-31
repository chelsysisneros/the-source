'use client';

import { FilterState } from '@/types';
import { categories } from '@/data/categories';
import { SlidersHorizontal, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const eras = ['Pre-1900', '1900-1950', '1950-1980', '1980-2000', '2000+'];
const conditions = ['Excellent', 'Good', 'Fair'];

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ filters, onFilterChange, isOpen, onClose }: FilterSidebarProps) {
  const toggleArrayFilter = (
    key: 'era' | 'condition',
    value: string
  ) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated.length > 0 ? updated : undefined });
  };

  const content = (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-[#3C2415] text-sm font-semibold mb-3 uppercase tracking-wider">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.slug} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.slug}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    category: filters.category === cat.slug ? undefined : cat.slug,
                  })
                }
                className="w-4 h-4 accent-[#C67C5B]"
              />
              <span className="text-sm text-[#6B5738] group-hover:text-[#3C2415] transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-[#3C2415] text-sm font-semibold mb-3 uppercase tracking-wider">
          Era
        </h3>
        <div className="space-y-2">
          {eras.map((era) => (
            <label key={era} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.era?.includes(era) || false}
                onChange={() => toggleArrayFilter('era', era)}
                className="w-4 h-4 accent-[#C67C5B] rounded"
              />
              <span className="text-sm text-[#6B5738] group-hover:text-[#3C2415] transition-colors">
                {era}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-[#3C2415] text-sm font-semibold mb-3 uppercase tracking-wider">
          Condition
        </h3>
        <div className="space-y-2">
          {conditions.map((cond) => (
            <label key={cond} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.condition?.includes(cond) || false}
                onChange={() => toggleArrayFilter('condition', cond)}
                className="w-4 h-4 accent-[#C67C5B] rounded"
              />
              <span className="text-sm text-[#6B5738] group-hover:text-[#3C2415] transition-colors">
                {cond}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-[#3C2415] text-sm font-semibold mb-3 uppercase tracking-wider">
          Sort By
        </h3>
        <select
          value={filters.sortBy || 'newest'}
          onChange={(e) =>
            onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })
          }
          className="w-full p-2.5 border border-[#E8DCC8] rounded-lg text-sm text-[#3C2415] bg-white focus:outline-none focus:border-[#C67C5B]"
        >
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <button
        onClick={() => onFilterChange({})}
        className="text-sm text-[#C67C5B] hover:underline underline-offset-2 cursor-pointer"
      >
        Clear all filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28">{content}</div>
      </aside>

      {/* Mobile slide-up */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <div
          className={cn(
            'absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto transition-transform duration-300',
            isOpen ? 'translate-y-0' : 'translate-y-full'
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-lg text-[#3C2415]">Filters</h2>
            <button onClick={onClose} className="p-1 cursor-pointer">
              <X className="w-5 h-5 text-[#6B5738]" />
            </button>
          </div>
          {content}
        </div>
      </div>

      {/* Mobile filter toggle button */}
      <button
        onClick={() => onClose()}
        className="fixed bottom-6 right-6 z-40 lg:hidden bg-[#3C2415] text-[#FDF8F0] p-4 rounded-full shadow-xl cursor-pointer"
      >
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </>
  );
}
