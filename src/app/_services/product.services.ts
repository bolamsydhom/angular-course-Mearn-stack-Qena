import { EventEmitter } from '@angular/core';
import { Product } from '../_model/product';

export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      data: [{ name: 'Photo camera', description: 'Hamaaaaaaaada' }],
      price: 300,
      discount: 50,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 2,
      data: [{ name: 'camera', description: 'Hamaaaaaaaada' }],
      price: 3000,
      // discount: 50,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 3,
      data: [{ name: 'phone', description: 'Hamaaaaaaaada' }],
      price: 500,
      discount: 50,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 4,
      data: [{ name: 'Note 8', description: 'Hamaaaaaaaada' }],
      price: 5000,
      // discount: 100,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 5,
      data: [{ name: 'laptop', description: 'Hamaaaaaaaada' }],
      price: 30000,
      discount: 5000,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 6,
      data: [{ name: 'camera 1', description: 'Hamaaaaaaaada' }],
      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 7,
      data: [{ name: 'camera 2', description: 'Hamaaaaaaaada' }],
      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 8,
      data: [{ name: 'camera3', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 9,
      data: [{ name: 'camera 4', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 10,
      data: [{ name: 'camera 5', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 11,
      data: [{ name: 'camera 6', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 12,
      data: [{ name: 'camera 7', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 13,
      data: [{ name: 'camera 8', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
    },
    {
      id: 14,
      data: [{ name: 'camera 9', description: 'Hamaaaaaaaada' }],

      price: 10000,
      discount: 500,
      imagesUrl: ['../../../../assets/img/placeholder.png'],
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

  addProduct(product: Product) {
    const id = this.products.length;
    const {data, price, discount, category, imagesUrl, paymentTypes, tags} = product;
    const newProduct: Product = {
      id,
      data,
      price: product.price,
      discount: product.discount,
      category: product.category,
      imagesUrl: product.imagesUrl,
      paymentTypes: product.paymentTypes,
      tags: product.tags,
    };
    this.products.push(newProduct);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex((p) => p.id === product.id);
    //   for (let index = 0; index < this.products.length; index++) {
    //      if(this.products[index].id == id ){
    //          return index;
    //      }
    //   }
    this.products[index] = {
      id: product.id,
      data: product.data,
      price: product.price,
      discount: product.discount,
      category: product.category,
      imagesUrl: product.imagesUrl,
      paymentTypes: product.paymentTypes,
      tags: product.tags,
    };
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
  }

  searchByName(productName:string){
    //e.title.toLowerCase().includes("this".toLowerCase())
    const prodName = productName.toLowerCase();
    return this.products.filter(p => p.data[0].name.toLowerCase().includes(prodName));
  }
}
