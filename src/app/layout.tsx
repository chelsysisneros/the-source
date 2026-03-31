import type { Metadata } from 'next';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartDrawer } from '@/components/ui/cart-drawer';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Source | Curated Vintage & Antique Home Goods',
  description:
    'Discover one-of-a-kind vintage furniture, lighting, art, rugs, and decor from trusted sellers. The Source — where history meets home.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-espresso">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
