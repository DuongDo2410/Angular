import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ProductsComponent } from './backend/products/products.component';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';

import { ProductService } from './product.service';
import { HomeComponent } from './frontend/home/home.component';
import { AdminComponent } from './backend/admin/admin.component';
import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { ProductShowComponent } from './frontend/product-show/product-show.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    HomeComponent,
    AdminComponent,
    ProductDetailComponent,
    ProductShowComponent
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {}
