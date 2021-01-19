import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { DropdownComponent } from './shared/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ProductItemComponent,
    ProductListingComponent,
    FooterComponent,
    TestComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
