import { useState, useCallback } from 'react';

export interface Product {
  id: number;
  name: string;
  nameRu: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  sizes: string[];
  description: {
    fabric: string;
    fit: string;
    care: string;
  };
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

// Simple global state using a shared object + listeners
type Listener = () => void;
const listeners: Set<Listener> = new Set();

let favorites: number[] = [];
let cart: CartItem[] = [];

function notify() {
  listeners.forEach(l => l());
}

export function useStore() {
  const [, setTick] = useState(0);

  const subscribe = useCallback(() => {
    const listener = () => setTick(t => t + 1);
    listeners.add(listener);
    return () => { listeners.delete(listener); };
  }, []);

  // Subscribe on mount
  useState(() => {
    const unsub = subscribe();
    return unsub;
  });

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      favorites = favorites.filter(f => f !== id);
    } else {
      favorites = [...favorites, id];
    }
    notify();
  };

  const addToCart = (product: Product, size: string) => {
    const existing = cart.find(c => c.product.id === product.id && c.size === size);
    if (existing) {
      cart = cart.map(c =>
        c.product.id === product.id && c.size === size
          ? { ...c, quantity: c.quantity + 1 }
          : c
      );
    } else {
      cart = [...cart, { product, size, quantity: 1 }];
    }
    notify();
  };

  const removeFromCart = (productId: number, size: string) => {
    cart = cart.filter(c => !(c.product.id === productId && c.size === size));
    notify();
  };

  const updateQuantity = (productId: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    cart = cart.map(c =>
      c.product.id === productId && c.size === size
        ? { ...c, quantity }
        : c
    );
    notify();
  };

  return {
    favorites,
    cart,
    toggleFavorite,
    addToCart,
    removeFromCart,
    updateQuantity,
    isFavorite: (id: number) => favorites.includes(id),
    cartTotal: cart.reduce((sum, c) => sum + c.product.price * c.quantity, 0),
    cartCount: cart.reduce((sum, c) => sum + c.quantity, 0),
  };
}
