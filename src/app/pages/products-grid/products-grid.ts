import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../modes/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [
    ProductCard,
    MatSidenavModule,
    MatListModule,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
  ],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export default class ProductsGrid {
  products = signal<Product[]>([
    {
      id: '1',
      name: 'Sony WH-1000XM5',
      description: 'Premium wireless headphones with noise cancellation.',
      price: 349.99,
      imageUrl:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviewCount: 245,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Apple Watch Series 10',
      description: 'Smartwatch with fitness tracking and heart rate monitoring.',
      price: 399,
      imageUrl:
        'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 182,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: '3',
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical keyboard for gaming and productivity.',
      price: 129.99,
      imageUrl:
        'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 120,
      inStock: false,
      category: 'Electronics',
    },
    {
      id: '4',
      name: 'Nike Running Shoes',
      description: 'Lightweight running shoes with responsive cushioning.',
      price: 129.99,
      imageUrl:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80',
      rating: 4.3,
      reviewCount: 98,
      inStock: true,
      category: 'Fashion',
    },
    {
      id: '5',
      name: 'Travel Backpack',
      description: 'Durable backpack with a dedicated laptop compartment.',
      price: 89.99,
      imageUrl:
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 156,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: '6',
      name: 'JBL Bluetooth Speaker',
      description: 'Portable speaker with rich sound and long battery life.',
      price: 119.99,
      imageUrl:
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
      rating: 4.4,
      reviewCount: 76,
      inStock: false,
      category: 'Electronics',
    },
    {
      id: '7',
      name: 'iPhone',
      description: 'Modern smartphone with a stunning display and camera.',
      price: 799,
      imageUrl:
        'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 324,
      inStock: true,
      category: 'Phones',
    },
    {
      id: '8',
      name: 'MacBook Air',
      description: 'Thin, lightweight laptop for work and creativity.',
      price: 1099,
      imageUrl:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
      rating: 4.8,
      reviewCount: 412,
      inStock: true,
      category: 'Computers',
    },
    {
      id: '9',
      name: 'Classic Puffer Jacket',
      description: 'Warm and comfortable jacket for cold weather.',
      price: 249.99,
      imageUrl:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 98,
      inStock: true,
      category: 'Fashion',
    },
    {
      id: '10',
      name: 'Skincare Essentials',
      description: 'A daily skincare set for a refreshing routine.',
      price: 29.99,
      imageUrl:
        'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 221,
      inStock: true,
      category: 'Beauty',
    },
    {
      id: '11',
      name: 'Espresso Coffee Maker',
      description: 'Brew delicious espresso and coffee at home.',
      price: 199.99,
      imageUrl:
        'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 189,
      inStock: true,
      category: 'Home',
    },
    {
      id: '12',
      name: 'Classic Sunglasses',
      description: 'Timeless sunglasses with a versatile everyday design.',
      price: 154,
      imageUrl:
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 143,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: '13',
      name: 'Gaming Mouse',
      description: 'Precision gaming mouse with customizable buttons.',
      price: 69.99,
      imageUrl:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 167,
      inStock: true,
      category: 'Electronics',
    },
    {
      id: '14',
      name: 'Leather Wristwatch',
      description: 'Elegant wristwatch with a classic leather strap.',
      price: 179.99,
      imageUrl:
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80',
      rating: 4.4,
      reviewCount: 87,
      inStock: true,
      category: 'Accessories',
    },
    {
      id: '15',
      name: 'Modern Lounge Chair',
      description: 'Stylish accent chair for a comfortable living space.',
      price: 299.99,
      imageUrl:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80',
      rating: 4.7,
      reviewCount: 64,
      inStock: false,
      category: 'Furniture',
    },
    {
      id: '16',
      name: 'Ceramic Coffee Mug',
      description: 'Minimal ceramic mug for your favorite hot drinks.',
      price: 19.99,
      imageUrl:
        'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&auto=format&fit=crop&q=80',
      rating: 4.3,
      reviewCount: 53,
      inStock: true,
      category: 'Home',
    },
    {
      id: '17',
      name: 'Premium Leather Bag',
      description: 'Versatile everyday bag with a refined design.',
      price: 139.99,
      imageUrl:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=80',
      rating: 4.6,
      reviewCount: 112,
      inStock: true,
      category: 'Fashion',
    },
    {
      id: '18',
      name: 'Wireless Earbuds',
      description: 'Compact wireless earbuds with clear audio.',
      price: 99.99,
      imageUrl:
        'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&auto=format&fit=crop&q=80',
      rating: 4.5,
      reviewCount: 205,
      inStock: true,
      category: 'Electronics',
    },
  ]);
  category = input<string>('all');

  filteredProducts = computed(() =>
    this.category() === 'all'
      ? this.products()
      : this.products().filter(
          (item) => item?.category?.toLowerCase() === this.category().toLowerCase(),
        ),
  );
  addToCart(product: Product) {}
  categories = computed(() => [
    'all',
    ...new Set(this.products().map((product) => product.category.toLowerCase())),
  ]);
}
