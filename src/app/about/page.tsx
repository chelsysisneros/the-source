import Link from 'next/link';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Leaf, Eye, Heart, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Curated Quality',
    description:
      'Every item is hand-vetted by our team for authenticity, condition, and design merit. We only list pieces we would be proud to have in our own homes.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Living',
    description:
      'Buying vintage is one of the most sustainable choices you can make. Every pre-loved piece purchased is one less item manufactured and one less in a landfill.',
  },
  {
    icon: Heart,
    title: 'Supporting Artisans',
    description:
      'We champion independent sellers, small dealers, and passionate collectors. Our fair commission model ensures they can build sustainable businesses doing what they love.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#3C2415] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#FDF8F0] mb-6 leading-tight">
            The Story Behind
            <br />
            The Source
          </h1>
          <p className="text-lg text-[#E8DCC8] max-w-2xl mx-auto leading-relaxed">
            We started The Source because we believed there had to be a better way to buy and sell
            vintage — one that honored the beauty of these objects and the people who care for them.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
      </div>

      {/* Mission */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <p className="font-serif text-2xl md:text-3xl text-[#3C2415] leading-relaxed">
          &ldquo;We exist to connect people with objects that have soul — pieces that carry history,
          craftsmanship, and beauty into modern homes.&rdquo;
        </p>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#8B9E7E]/15 flex items-center justify-center">
                <value.icon className="w-6 h-6 text-[#8B9E7E]" />
              </div>
              <h3 className="font-serif text-xl text-[#3C2415] mb-3">{value.title}</h3>
              <p className="text-[#6B5738] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F5F0E8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3C2415] text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#C67C5B] text-[#FDF8F0] flex items-center justify-center font-serif text-xl font-bold">
                1
              </div>
              <h3 className="font-serif text-lg text-[#3C2415] mb-3">Discover</h3>
              <p className="text-[#6B5738]">
                Browse thousands of curated vintage pieces across eight categories. Use our filters
                to find exactly what speaks to you.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#C67C5B] text-[#FDF8F0] flex items-center justify-center font-serif text-xl font-bold">
                2
              </div>
              <h3 className="font-serif text-lg text-[#3C2415] mb-3">Connect</h3>
              <p className="text-[#6B5738]">
                Learn about each piece&apos;s history and the passionate seller behind it. Every item
                comes with detailed provenance and condition notes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-[#C67C5B] text-[#FDF8F0] flex items-center justify-center font-serif text-xl font-bold">
                3
              </div>
              <h3 className="font-serif text-lg text-[#3C2415] mb-3">Enjoy</h3>
              <p className="text-[#6B5738]">
                Your piece is carefully packed and shipped to your door. Every purchase is backed by
                our buyer protection guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sell with us CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#3C2415] rounded-2xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-[#FDF8F0] mb-4">
              Sell With The Source
            </h2>
            <p className="text-[#E8DCC8] leading-relaxed mb-6">
              Join our community of trusted sellers. We offer the lowest commission rates in the
              industry, a beautiful storefront, professional photography tools, and access to a
              growing community of design-savvy buyers.
            </p>
            <div className="space-y-3 text-sm text-[#E8DCC8]">
              <p>&#10003; Industry-low 12% commission</p>
              <p>&#10003; Your own branded storefront</p>
              <p>&#10003; Dedicated seller support</p>
              <p>&#10003; Analytics dashboard</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium text-lg hover:bg-[#B06C4B] transition-colors"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#8B7355] mt-3">Applications reviewed within 48 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}
