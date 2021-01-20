import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

// import { ClassTest } from 'src/app/_model/classTest';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss'],
})
export class ProductListingComponent implements OnInit {
  products: Product[];
  // @Output() productAdded = new EventEmitter<Product>();
  pageNumbers: number[] = [];
  pageSize = 9;
  currentPage = 0;

  constructor(private productService: ProductService) {
  
  }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    for (let index = 0; index < this.products.length / this.pageSize; index++) {
      this.pageNumbers.push(index + 1);
    }
    // ClassTest.cartArray
  }

  // subscribeFunction(object: Product): void {
  //   this.productService.productAdded.emit(object);
  //   // this.productAdded.emit(object);
  // }

  getSlicedArrayOfProducts(): Product[] {
    const start = this.currentPage * this.pageSize;
    return this.products.slice(
     start,
     start + this.pageSize
    );
  }
}
