import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext';
import {Products} from './Products';
import {Cart} from './Cart'
import { ThemeToggle } from './ThemeToggle';// New

export function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div>
          <h1>🛒 My Stylish Shop</h1>
          <ThemeToggle />
          <Products />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

