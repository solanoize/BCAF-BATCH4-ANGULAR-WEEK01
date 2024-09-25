import { Component } from '@angular/core';
import { ISimpleProduct } from './features/products/interfaces/i-product';

interface ICategory {
  id: number;
  name: string;
}

interface IProduct {
  id: number;
  title: string;
  stock: number;
  price: number;
  categories?: ICategory[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product: ISimpleProduct = {
    title: 'Contoh Product 01',
    description: 'Lorem ipsum',
    price: 34000,
    stock: 20,
  };
  counter: number = 10;

  handler(data: number) {
    this.counter = data;
  }

  products: IProduct[] = [
    {
      id: 1,
      title: 'Laptop',
      stock: 10,
      price: 15000000,
      categories: [
        {
          id: 3,
          name: 'Eleltronik',
        },
        {
          id: 2,
          name: 'Learning',
        },
      ],
    },
    {
      id: 2,
      title: 'Smartphone',
      stock: 25,
      price: 7000000,
      categories: [
        {
          id: 3,
          name: 'Eleltronik',
        },
      ],
    },
    {
      id: 3,
      title: 'Tablet',
      stock: 15,
      price: 5000000,
      categories: [
        {
          id: 3,
          name: 'Eleltronik',
        },
        {
          id: 5,
          name: 'Gaming',
        },
      ],
    },
    { id: 4, title: 'Monitor', stock: 8, price: 3000000 },
    { id: 5, title: 'Keyboard', stock: 20, price: 500000 },
    { id: 6, title: 'Mouse', stock: 35, price: 300000 },
    { id: 7, title: 'Headphone', stock: 12, price: 1000000 },
    { id: 8, title: 'Printer', stock: 5, price: 2500000 },
    { id: 9, title: 'Webcam', stock: 18, price: 800000 },
    { id: 10, title: 'Router', stock: 30, price: 900000 },
  ];
}
