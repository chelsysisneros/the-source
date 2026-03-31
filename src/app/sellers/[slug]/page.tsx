import Image from 'next/image';
import { sellers, getSellerProducts } from '@/data';
import { ProductCard } from '@/components/ui/product-card';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Star, MapPin, Calendar } from 'lucide-react';

export function generateStaticParams() {
  return sellers.map((s) => ({ slug: s.slug }));
}

export default async function SellerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seller = sellers.find((s) => s.slug === slug);

  if (!seller) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-[#3C2415]">Seller not found</h1>
      </div>
    );
  }

  const sellerProducts = getSellerProducts(seller.id);

  return (
    <div>
      {/* Cover */}
      <div className="relative h-48 md:h-72">
        <Image
          src={seller.coverImage}
          alt={seller.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#3C2415]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seller Info */}
        <div className="relative -mt-16 mb-10">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-[#FDF8F0] shadow-lg flex-shrink-0">
              <Image
                src={seller.avatar}
                alt={seller.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div className="pt-2">
              <h1 className="font-serif text-2xl md:text-3xl text-[#3C2415] mb-2">
                {seller.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B7355] mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {seller.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Member since {seller.memberSince}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#D4A853] text-[#D4A853]" />
                  {seller.rating} ({seller.reviewCount} reviews)
                </span>
              </div>
              <p className="text-[#6B5738] max-w-2xl leading-relaxed">{seller.bio}</p>
            </div>
          </div>
        </div>

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Sellers', href: '/sellers' },
            { label: seller.name },
          ]}
        />

        {/* Products */}
        <section className="mt-10 mb-16">
          <h2 className="font-serif text-2xl text-[#3C2415] mb-6">
            Their Collection ({sellerProducts.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sellerProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
