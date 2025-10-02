'use client';

import { useState } from 'react';
import { foodItems } from '@/lib/data';
import type { FoodItem } from '@/lib/types';
import FoodItemCard from '@/components/food-item-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const categories = ['all', 'meals', 'snacks', 'drinks'];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFoodItems = foodItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">Welcome to FoodieCart</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover delicious meals, snacks, and drinks. Your next favorite dish is just a click away.
        </p>
      </header>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for food..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="capitalize shrink-0"
                style={{
                  backgroundColor: selectedCategory === category ? 'var(--accent)' : 'transparent',
                  color: selectedCategory === category ? 'var(--accent-foreground)' : '',
                  borderColor: selectedCategory === category ? 'var(--accent)' : 'var(--border)',
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {filteredFoodItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFoodItems.map((item: FoodItem) => (
              <FoodItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No items match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
