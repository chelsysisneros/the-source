'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-[#8B9E7E] py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">
          Get First Access to New Arrivals
        </h2>
        <p className="text-white/80 mb-8">
          Join our community of design enthusiasts and be the first to discover newly listed treasures.
        </p>
        {submitted ? (
          <p className="text-white font-medium text-lg">
            Welcome aboard! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white focus:bg-white/30 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#5A6B4F] font-medium rounded-lg hover:bg-[#FDF8F0] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
