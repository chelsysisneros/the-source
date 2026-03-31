'use client';

import { use } from 'react';
import Link from 'next/link';
import { getProductBySlug, getProductsByCategory } from '@/data';
import { useCart } from '@/context/cart-context';
import { ImageGallery } from '@/components/ui/image-gallery';
import { PriceDisplay } from '@/components/ui/price-display';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { ProductCard } from '@/components/ui/product-card';
import { ShoppingBag, Truck, Shield, Star } from 'lucide-react';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-[#3C2415]">Product not found</h1>
      </div>
    );
  }

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: product.category, href: `/shop/${product.categorySlug}` },
          { label: product.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-8">
        {/* Images */}
        <ImageGallery images={product.images} alt={product.name} />

        {/* Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="condition">{product.condition}</Badge>
              <Badge>{product.era}</Badge>
            </div>
            <h1 className="font-serif text-2xl md:text-3xl text-[#3C2415] leading-snug mb-3">
              {product.name}
            </h1>
            <PriceDisplay price={product.price} originalPrice={product.originalPrice} />
          </div>

          <p className="text-[#6B5738] leading-relaxed">{product.description}</p>

          {/* Details */}
          <div className="border-t border-b border-[#E8DCC8] py-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#8B7355]">Dimensions</span>
              <span className="text-[#3C2415] font-medium">{product.dimensions}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8B7355]">Materials</span>
              <span className="text-[#3C2415] font-medium">{product.materials.join(', ')}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8B7355]">Era</span>
              <span className="text-[#3C2415] font-medium">{product.era}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8B7355]">Condition</span>
              <span className="text-[#3C2415] font-medium">{product.condition}</span>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="w-full py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium text-base hover:bg-[#B06C4B] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </button>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <Truck className="w-5 h-5 mx-auto text-[#8B9E7E] mb-1.5" />
              <p className="text-xs text-[#8B7355]">Careful shipping</p>
            </div>
            <div className="text-center">
              <Shield className="w-5 h-5 mx-auto text-[#8B9E7E] mb-1.5" />
              <p className="text-xs text-[#8B7355]">Buyer protection</p>
            </div>
            <div className="text-center">
              <Star className="w-5 h-5 mx-auto text-[#8B9E7E] mb-1.5" />
              <p className="text-xs text-[#8B7355]">Authenticated</p>
            </div>
          </div>

          {/* Seller */}
          <div className="bg-[#F5F0E8] rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#8B7355] mb-1">Sold by</p>
                <Link
                  href={`/sellers/${product.sellerId === 'seller-1' ? 'hazel-and-pine' : product.sellerId === 'seller-2' ? 'desert-modern-co' : product.sellerId === 'seller-3' ? 'patina-and-thread' : product.sellerId === 'seller-4' ? 'copper-and-oak' : product.sellerId === 'seller-5' ? 'the-found-object' : 'lumiere-vintage'}`}
                  className="font-medium text-[#3C2415] hover:text-[#C67C5B] transition-colors"
                >
                  {product.sellerName}
                </Link>
              </div>
              <Link
                href={`/sellers/${product.sellerId === 'seller-1' ? 'hazel-and-pine' : product.sellerId === 'seller-2' ? 'desert-modern-co' : product.sellerId === 'seller-3' ? 'patina-and-thread' : product.sellerId === 'seller-4' ? 'copper-and-oak' : product.sellerId === 'seller-5' ? 'the-found-object' : 'lumiere-vintage'}`}
                className="text-sm text-[#C67C5B] hover:underline underline-offset-2"
              >
                View storefront
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20 mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-[#3C2415] mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
