export interface FoodItem {
  id: string;
  name: string;
  category: 'drinks' | 'snacks' | 'meals';
  price: number;
  imageUrl: string;
  imageHint: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  items: CartItem[];
  total: number;
  date: string;
}
