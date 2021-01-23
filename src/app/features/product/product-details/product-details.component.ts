import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_model/product';
import { ProductService } from 'src/app/_services/product.services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  relatedProducts: Product[]=[];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id;
    // this.relatedProducts = this.productService.getAllProducts().slice(3, 7);
    this.activatedRoute.params.subscribe(
      (params) => {
        id = params.id;
        this.product = this.productService.getProductById(+id);
      },
      (error) => {
        console.log(error);
      },
      () => {}
    );
    // const id = this.activatedRoute.snapshot.params.id;
    
  }
}
