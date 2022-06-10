import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  };

  clearCart() {
    this.items = [];
    return this.items;
  }
}

