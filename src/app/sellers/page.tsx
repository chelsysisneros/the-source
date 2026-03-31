import { sellers } from '@/data';
import { SellerCard } from '@/components/ui/seller-card';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export default function SellersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Sellers' }]} />

      <div className="mt-8 mb-12 max-w-2xl">
        <h1 className="font-serif text-3xl md:text-4xl text-[#3C2415] mb-4">Our Sellers</h1>
        <p className="text-[#6B5738] leading-relaxed">
          Every seller on The Source is hand-picked for their expertise, passion, and commitment to
          quality. From seasoned antique dealers to passionate collectors, each brings a unique eye
          and story to our marketplace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sellers.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>

      {/* Become a Seller CTA */}
      <section className="bg-[#3C2415] rounded-2xl p-10 md:p-16 text-center mb-12">
        <h2 className="font-serif text-2xl md:text-3xl text-[#FDF8F0] mb-4">
          Interested in Selling?
        </h2>
        <p className="text-[#E8DCC8] max-w-lg mx-auto mb-8 leading-relaxed">
          Join our community of trusted sellers. We offer fair commission rates, a beautiful
          storefront, and a community of buyers who value quality and craftsmanship.
        </p>
        <a
          href="/about"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium hover:bg-[#B06C4B] transition-colors"
        >
          Apply to Sell
        </a>
      </section>
    </div>
  );
}
