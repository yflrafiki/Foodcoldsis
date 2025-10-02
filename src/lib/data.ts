import type { FoodItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    category: 'meals',
    price: 12.99,
    imageUrl: getImage('pizza-margherita')?.imageUrl || "https://picsum.photos/seed/pizza1/400/300",
    imageHint: getImage('pizza-margherita')?.imageHint || "pizza cheese"
  },
  {
    id: '2',
    name: 'Pepperoni Pizza',
    category: 'meals',
    price: 14.99,
    imageUrl: getImage('pepperoni-pizza')?.imageUrl || "https://picsum.photos/seed/pizza2/400/300",
    imageHint: getImage('pepperoni-pizza')?.imageHint || "pizza pepperoni"
  },
  {
    id: '3',
    name: 'Coca-Cola',
    category: 'drinks',
    price: 2.50,
    imageUrl: getImage('coca-cola')?.imageUrl || "https://picsum.photos/seed/cola/400/300",
    imageHint: getImage('coca-cola')?.imageHint || "soda drink"
  },
  {
    id: '4',
    name: 'Orange Juice',
    category: 'drinks',
    price: 3.00,
    imageUrl: getImage('orange-juice')?.imageUrl || "https://picsum.photos/seed/juice/400/300",
    imageHint: getImage('orange-juice')?.imageHint || "juice orange"
  },
  {
    id: '5',
    name: 'Potato Chips',
    category: 'snacks',
    price: 4.25,
    imageUrl: getImage('potato-chips')?.imageUrl || "https://picsum.photos/seed/chips/400/300",
    imageHint: getImage('potato-chips')?.imageHint || "chips snack"
  },
  {
    id: '6',
    name: 'Chocolate Bar',
    category: 'snacks',
    price: 2.75,
    imageUrl: getImage('chocolate-bar')?.imageUrl || "https://picsum.photos/seed/chocolate/400/300",
    imageHint: getImage('chocolate-bar')?.imageHint || "chocolate candy"
  },
  {
    id: '7',
    name: 'Cheeseburger Combo',
    category: 'meals',
    price: 15.50,
    imageUrl: getImage('cheeseburger')?.imageUrl || "https://picsum.photos/seed/burger/400/300",
    imageHint: getImage('cheeseburger')?.imageHint || "burger fries"
  },
  {
    id: '8',
    name: 'Chicken Salad',
    category: 'meals',
    price: 11.00,
    imageUrl: getImage('chicken-salad')?.imageUrl || "https://picsum.photos/seed/salad/400/300",
    imageHint: getImage('chicken-salad')?.imageHint || "salad chicken"
  },
];
