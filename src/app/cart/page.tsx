'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/utils';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Cart' }]} />

      <h1 className="font-serif text-3xl md:text-4xl text-[#3C2415] mt-6 mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingBag className="w-20 h-20 text-[#E8DCC8] mx-auto mb-6" />
          <h2 className="font-serif text-2xl text-[#3C2415] mb-3">Your cart is empty</h2>
          <p className="text-[#8B7355] mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any treasures yet. Start exploring our curated
            collection of vintage finds.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium hover:bg-[#B06C4B] transition-colors"
          >
            Start Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-5 p-4 rounded-xl border border-[#E8DCC8] bg-white"
                >
                  <div className="relative w-28 h-36 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F0E8]">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-serif text-[#3C2415] hover:underline underline-offset-2 line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-[#8B7355] mt-0.5">{item.product.sellerName}</p>
                        <p className="text-xs text-[#8B7355] mt-1">
                          {item.product.era} &middot; {item.product.condition}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-1 hover:bg-[#F5F0E8] rounded-lg transition-colors flex-shrink-0 cursor-pointer"
                      >
                        <X className="w-4 h-4 text-[#8B7355]" />
                      </button>
                    </div>
                    <div className="flex items-end justify-between mt-4">
                      <div className="flex items-center border border-[#E8DCC8] rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-[#F5F0E8] transition-colors cursor-pointer"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-[#6B5738]" />
                        </button>
                        <span className="px-4 text-sm font-medium text-[#3C2415]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-[#F5F0E8] transition-colors cursor-pointer"
                        >
                          <Plus className="w-4 h-4 text-[#6B5738]" />
                        </button>
                      </div>
                      <p className="font-semibold text-[#3C2415]">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={clearCart}
              className="mt-6 text-sm text-[#C67C5B] hover:underline underline-offset-2 cursor-pointer"
            >
              Clear cart
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <div className="sticky top-28 bg-[#F5F0E8] rounded-xl p-6 md:p-8">
              <h2 className="font-serif text-xl text-[#3C2415] mb-6">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#8B7355]">Subtotal</span>
                  <span className="text-[#3C2415] font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B7355]">Shipping</span>
                  <span className="text-[#3C2415] font-medium">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8B7355]">Tax</span>
                  <span className="text-[#3C2415] font-medium">Calculated at checkout</span>
                </div>
              </div>

              <div className="border-t border-[#E8DCC8] mt-6 pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-serif text-lg text-[#3C2415]">Total</span>
                  <span className="font-serif text-2xl text-[#3C2415]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <button className="w-full py-4 bg-[#C67C5B] text-[#FDF8F0] rounded-lg font-medium hover:bg-[#B06C4B] transition-colors cursor-pointer">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-center text-[#8B7355] mt-3">
                  Secure checkout powered by Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
