import { Product, FilterState } from '@/types';
import { categories } from './categories';
import { sellers } from './sellers';
import { products } from './products';

export { categories, sellers, products };

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getSellerBySlug(slug: string) {
  return sellers.find((s) => s.slug === slug);
}

export function getSellerProducts(sellerId: string): Product[] {
  return products.filter((p) => p.sellerId === sellerId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.materials.some((m) => m.toLowerCase().includes(q))
  );
}

export function filterProducts(items: Product[], filters: FilterState): Product[] {
  let result = [...items];

  if (filters.category) {
    result = result.filter((p) => p.categorySlug === filters.category);
  }

  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    result = result.filter((p) => p.price >= min && p.price <= max);
  }

  if (filters.era && filters.era.length > 0) {
    result = result.filter((p) => filters.era!.includes(p.era));
  }

  if (filters.condition && filters.condition.length > 0) {
    result = result.filter((p) => filters.condition!.includes(p.condition));
  }

  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }

  return result;
}
