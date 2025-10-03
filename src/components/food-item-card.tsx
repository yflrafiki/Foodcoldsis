'use client';

import Image from 'next/image';
import type { FoodItem } from '@/lib/types';
import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

interface FoodItemCardProps {
  item: FoodItem;
}

export default function FoodItemCard({ item }: FoodItemCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <button onClick={handleAddToCart} className="text-left h-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
      <Card className="flex flex-col overflow-hidden h-full transition-shadow duration-300 hover:shadow-lg w-full">
        <CardHeader className="p-0">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              data-ai-hint={item.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex-grow">
            <Badge variant="secondary" className="mb-2 capitalize">{item.category}</Badge>
            <CardTitle className="text-lg leading-tight mb-2 font-headline">{item.name}</CardTitle>
          </div>
          <p className="text-2xl font-bold font-headline text-primary mt-2">
            Ghc{item.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className={cn(
              "w-full",
              "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
              "bg-primary text-primary-foreground h-10 px-4 py-2"
          )}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </div>
        </CardFooter>
      </Card>
    </button>
  );
}
