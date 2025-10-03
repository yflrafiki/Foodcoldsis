'use client';

import Link from 'next/link';
import {History, ShoppingCart, Utensils } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import React from 'react';

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/cart', label: 'Cart' },
    // { href: '/checkout', label: 'Checkout' },
    { href: '/order-history', label: 'Order History' },
  ];

  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
          <Utensils className="h-6 w-6" />
          <span>FoodieCart</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <span className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/cart" passHref>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>
           {/* Mobile nav could be added here with a Sheet component */}
           <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold font-headline text-primary mb-4" onClick={() => setSheetOpen(false)}>
                <Utensils className="h-6 w-6" />
                <span>FoodieCart</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} passHref>
                    <span
                      onClick={() => setSheetOpen(false)}
                      className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
                    )}>
                      {link.label}
                    </span>
                  </Link>
                ))}
              </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
