import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  @Output() productAdded = new EventEmitter<Product>();
  pageNumbers: number[] = [];
  pageSize = 9;
  currentPage = 0;
  constructor() {
    this.products = [
      {
        name: 'Photo camera',
        price: 300,
        discount: 50,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'camera',
        price: 3000,
        // discount: 50,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Phone',
        price: 500,
        discount: 50,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Samsung Note 8',
        price: 5000,
        // discount: 100,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Labtop',
        price: 30000,
        discount: 5000,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Hamada',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Hamada1',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Hamada2',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'Hamada3',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'newItems',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'newItems1',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'newItems2',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'newItems3',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
      {
        name: 'newItems4',
        price: 10000,
        discount: 500,
        imgUrl: '../../../../assets/img/placeholder.png',
      },
    ];
  }

  ngOnInit(): void {
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
  }

  subscribeFunction(object: Product): void {
    this.productAdded.emit(object);
  }

  getSlicedArrayOfProducts(): Product[] {
    const start = this.currentPage * this.pageSize;
    return this.products.slice(
     start,
     start + this.pageSize
    );
  }
}
