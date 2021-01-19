import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/app/_model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() cartArray: Product[];
  isOpened = false;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes) {
    // console.log(this.cartArray);
  }
}
