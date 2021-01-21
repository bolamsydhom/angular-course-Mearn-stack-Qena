import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_model/payment-type';
import { Product } from 'src/app/_model/product';
import { ProductCategory } from 'src/app/_model/product-category';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductCategoryService } from 'src/app/_services/product-category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  product: Product = { data: [{}], paymentTypes: [], tags: [], category: {} };
  paymentTypes: PaymentType[] = [];
  productCategory: ProductCategory[] = [];
  constructor(
    private paymentTypeService: PaymentTypeService,
    private productCategoryService: ProductCategoryService
  ) {}

  ngOnInit(): void {
    this.paymentTypes = this.paymentTypeService.getAllPayments();
    this.productCategory = this.productCategoryService.getAllProductCategory();
  }
  onSubmit(form) {
    // object: {name: 'hamda, age: 25}  -> object.name OR object['name']

    // for (let index = 0; index < this.paymentTypes.length; index++) {
    //   if (form.value['check_' + index]) {
    //     this.product.paymentTypes.push(this.paymentTypes[index]);
    //   }
    // }
    // const h = var1 as HTMLFormElement;

    console.log(form);
  }

  onCheckBoxPressed(index) {
    // this.product.paymentTypes.push(this.paymentTypes[index])
    // alert(index);
  }

  onTagAdded(tagInput) {
    this.product.tags.push({ name: tagInput.value });
    tagInput.value = '';
  }
}
