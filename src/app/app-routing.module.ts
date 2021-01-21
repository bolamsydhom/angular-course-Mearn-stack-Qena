import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddProductComponent } from './features/product/add-product/add-product.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: '', component: ProductListingComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '**', component: TestComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CustomAppRoutingModule {}
