export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  categorySlug: string;
  era: string;
  condition: 'Excellent' | 'Good' | 'Fair';
  dimensions: string;
  materials: string[];
  sellerId: string;
  sellerName: string;
  featured: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Seller {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  coverImage: string;
  location: string;
  memberSince: string;
  rating: number;
  reviewCount: number;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category?: string;
  priceRange?: [number, number];
  era?: string[];
  condition?: string[];
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'name';
}
