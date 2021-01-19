import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Output() itemAdded = new EventEmitter<Product>();
  example: string;
  person:{name,age}
  constructor() {
    // if (this.product.price < 500) {
    //   //this a backend call
    //   this.product = {
    //     name: 'WOW DEAL',
    //     price: 300,
    //     // discount: 50,
    //     imgUrl: '../../../../assets/img/placeholder.png',
    //   };
    // }
  }

  ngOnInit(): void {}
  ngOnChanges():void{
  }

  getPrice(): number {
    return this.product.discount
      ? this.product.price - this.product.discount
      : this.product.price;
  }

  addedToCart(): void {
    this.itemAdded.emit(this.product);
  }
}
