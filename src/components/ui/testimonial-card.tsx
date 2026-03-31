import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export function TestimonialCard({ quote, name, location, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-xl bg-white border border-[#E8DCC8]">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-[#D4A853] text-[#D4A853]' : 'text-[#E8DCC8]'}`}
          />
        ))}
      </div>
      <p className="text-[#6B5738] italic mb-6 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-medium text-[#3C2415] text-sm">{name}</p>
        <p className="text-xs text-[#8B7355]">{location}</p>
      </div>
    </div>
  );
}
