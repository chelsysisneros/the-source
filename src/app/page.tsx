import Link from 'next/link';
import { ProductCard } from '@/components/ui/product-card';
import { CategoryCard } from '@/components/ui/category-card';
import { SellerCard } from '@/components/ui/seller-card';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { NewsletterSignup } from '@/components/ui/newsletter-signup';
import { getFeaturedProducts, categories, sellers } from '@/data';
import { ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'I found a stunning mid-century credenza that looks like it was made for my living room. The quality and curation here is unmatched — I\'ll never go back to mass-produced furniture.',
    name: 'Sarah Mitchell',
    location: 'Austin, TX',
    rating: 5,
  },
  {
    quote:
      'As a seller, The Source has completely transformed my business. The platform is beautiful, fees are fair, and the community of buyers genuinely appreciates craftsmanship.',
    name: 'Marcus Rivera',
    location: 'Portland, OR',
    rating: 5,
  },
  {
    quote:
      'Every piece I\'ve purchased has been exactly as described and arrived beautifully packed. The sellers here really care about what they do. My home has never looked better.',
    name: 'Emma Chen',
    location: 'Brooklyn, NY',
    rating: 5,
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#3C2415] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'url(https://placehold.co/1920x1080/8B7355/FDF8F0?text=)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44 text-center">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#FDF8F0] mb-6 leading-tight">
            Where History
            <br />
            Meets Home
          </h1>
          <p className="text-lg md:text-xl text-[#E8DCC8] max-w-2xl mx-auto mb-10 leading-relaxed">
            Discover one-of-a-kind vintage furniture, lighting, art, and decor
            from the world&apos;s most passionate sellers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg text-base font-medium hover:bg-[#B06C4B] transition-colors"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#FDF8F0]/40 text-[#FDF8F0] rounded-lg text-base font-medium hover:bg-[#FDF8F0]/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-2">
              Editor&apos;s Picks
            </h2>
            <p className="text-[#8B7355]">Hand-selected pieces we love right now</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-[#C67C5B] hover:underline underline-offset-4"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#C67C5B] hover:underline"
          >
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-3">
            Shop by Category
          </h2>
          <p className="text-[#8B7355] max-w-lg mx-auto">
            Explore our curated collections across every room and style
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* About Blurb */}
      <section className="bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-6 leading-snug">
                Every Piece
                <br />
                Tells a Story
              </h2>
              <p className="text-[#6B5738] leading-relaxed mb-6">
                We believe your home should be filled with objects that have lived, that carry the
                warmth of the hands that made them and the homes that loved them. That&apos;s why we
                partner with passionate sellers who share our commitment to quality, authenticity,
                and sustainability.
              </p>
              <p className="text-[#6B5738] leading-relaxed mb-8">
                Every item on The Source is hand-vetted for quality and provenance. No mass-produced
                replicas, no fast furniture — just genuine pieces with real stories.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C67C5B] font-medium hover:underline underline-offset-4"
              >
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#E8DCC8]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    'url(https://placehold.co/800x600/C67C5B/FDF8F0?text=Our+Story)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-2">
              Meet Our Sellers
            </h2>
            <p className="text-[#8B7355]">Trusted dealers curating with passion</p>
          </div>
          <Link
            href="/sellers"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-[#C67C5B] hover:underline underline-offset-4"
          >
            View all sellers <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sellers.slice(0, 3).map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-3">
              What People Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </>
  );
}
