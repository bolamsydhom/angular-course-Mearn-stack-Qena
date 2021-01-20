import { EventEmitter } from '@angular/core';
import { Product } from '../_model/product';

export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Photo camera',
      price: 300,
      discount: 50,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 2,
      name: 'camera',
      price: 3000,
      // discount: 50,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 3,
      name: 'Phone',
      price: 500,
      discount: 50,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 4,
      name: 'Samsung Note 8',
      price: 5000,
      // discount: 100,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 5,
      name: 'Labtop',
      price: 30000,
      discount: 5000,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 6,
      name: 'Hamada',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 7,
      name: 'Hamada1',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 8,
      name: 'Hamada2',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 9,
      name: 'Hamada3',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 10,
      name: 'newItems',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 11,
      name: 'newItems1',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 12,
      name: 'newItems2',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 13,
      name: 'newItems3',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
    {
      id: 14,
      name: 'newItems4',
      price: 10000,
      discount: 500,
      imgUrl: '../../../../assets/img/placeholder.png',
    },
  ];
  productAdded = new EventEmitter<Product>();

  currentPage = 'listing';

  getAllProducts(): Product[] {
    return this.products.slice();
  }

  getProductById(id: number): Product {
    return this.products.find((p) => p.id === id);

    //   for (let index = 0; index < this.products.length; index++) {
    //      if(this.products[index].id == id ){
    //          return this.products[index]
    //      }
    //   }
  }

  addProduct(name: string, price: number, discount: number, imgUrl: string) {
    const id = this.products.length;
    const product: Product = { id, name, price, discount, imgUrl };
    this.products.push(product);
  }

  updateProduct(
    id: number,
    name: string,
    price: number,
    discount: number,
    imgUrl: string
  ) {
    const index = this.products.findIndex((p) => p.id === id);
    //   for (let index = 0; index < this.products.length; index++) {
    //      if(this.products[index].id == id ){
    //          return index;
    //      }
    //   }
    this.products[index] = { id, name, price, discount, imgUrl };
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }
}
