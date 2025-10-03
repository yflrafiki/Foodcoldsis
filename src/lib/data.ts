import type { FoodItem } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Margherita Pizza',
    category: 'meals',
    price: 12.99,
    imageUrl: getImage('pizza-margherita')?.imageUrl || "https://images.unsplash.com/photo-1627626775846-122b778965ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emEtbWFyZ2hlcml0YXxlbnwwfHwwfHx8MA%3D%3D",
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
  {
    id: '9',
    name: 'spaghetti bolognese',
    category: 'meals',
    price: 13.50,
    imageUrl: getImage('spaghetti-bolognese')?.imageUrl || "https://media.istockphoto.com/id/2227721318/photo/spaghetti-bolognese-fork-fast-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=qx_QEmYc3dnZ9LVc9k3KTI4f5_AE6e-uILAjZ6wCeOc=",
    imageHint: getImage('spaghetti-bolognese')?.imageHint || "spaghetti pasta"

  },
  {
    id: '10',
    name: 'Waakye',
    category: 'meals',
    price: 5.00,
    imageUrl: getImage('Waakye')?.imageUrl || "https://media.istockphoto.com/id/184973888/photo/garlic-bread.jpg?s=612x612&w=0&k=20&c=ZkLh1bX3bX4nUu1kHf5rY8mXW2cX9b6v3Fz8eEJz4mM=",
    imageHint: getImage('Waakye')?.imageHint || "Waaky"
  },
  {
    id: '11',
    name: 'Veggie Burger',
    category: 'meals',
    price: 13.50,
    imageUrl: getImage('veggie-burger')?.imageUrl || "https://picsum.photos/seed/veggie/400/300",
    imageHint: getImage('veggie-burger')?.imageHint || "veggie burger",
  },
  {
    id: '12',
    name: 'Oat',
    category: 'meals',
    price: 10.00,
    imageUrl: getImage('oat')?.imageUrl || "https://media.istockphoto.com/id/184973888/photo/garlic-bread.jpg?s=612x612&w=0&k=20&c=ZkLh1bX3bX4nUu1kHf5rY8mXW2cX9b6v3Fz8eEJz4mM=",
    imageHint: getImage('oat')?.imageHint || "Oatmeal"
  }
];
