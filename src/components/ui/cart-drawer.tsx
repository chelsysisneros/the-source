'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { formatPrice } from '@/lib/utils';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { items, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 transition-opacity duration-300',
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-black/40" onClick={toggleCart} />
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 flex flex-col',
            isCartOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-[#E8DCC8]">
            <h2 className="font-serif text-lg text-[#3C2415]">
              Your Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
            </h2>
            <button onClick={toggleCart} className="p-1 hover:bg-[#F5F0E8] rounded-lg transition-colors cursor-pointer">
              <X className="w-5 h-5 text-[#6B5738]" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="w-16 h-16 text-[#E8DCC8] mb-4" />
              <p className="font-serif text-lg text-[#3C2415] mb-2">Your cart is empty</p>
              <p className="text-sm text-[#8B7355] mb-6">
                Discover unique vintage finds to make your space special.
              </p>
              <Link
                href="/shop"
                onClick={toggleCart}
                className="px-6 py-3 bg-[#C67C5B] text-[#FDF8F0] rounded-lg hover:bg-[#B06C4B] transition-colors text-sm font-medium"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-[#F5F0E8]">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-[#3C2415] line-clamp-1">
                        {item.product.name}
                      </h3>
                      <p className="text-xs text-[#8B7355] mb-2">{item.product.sellerName}</p>
                      <p className="font-semibold text-[#3C2415] text-sm">
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-[#E8DCC8] rounded-md">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#F5F0E8] transition-colors cursor-pointer"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3.5 h-3.5 text-[#6B5738]" />
                          </button>
                          <span className="px-2 text-sm text-[#3C2415]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#F5F0E8] transition-colors cursor-pointer"
                          >
                            <Plus className="w-3.5 h-3.5 text-[#6B5738]" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-xs text-[#C67C5B] hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#E8DCC8] p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#6B5738]">Subtotal</span>
                  <span className="font-serif text-xl text-[#3C2415]">
                    {formatPrice(cartTotal)}
                  </span>
                </div>
                <p className="text-xs text-[#8B7355]">Shipping calculated at checkout</p>
                <Link
                  href="/cart"
                  onClick={toggleCart}
                  className="block w-full py-3 bg-[#C67C5B] text-[#FDF8F0] text-center rounded-lg hover:bg-[#B06C4B] transition-colors font-medium"
                >
                  View Cart & Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
