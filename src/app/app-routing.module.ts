import { ProductDetailComponent } from './frontend/product-detail/product-detail.component';
import { AdminComponent } from './backend/admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './backend/product-add/product-add.component';
import { ProductEditComponent } from './backend/product-edit/product-edit.component';
import { ProductsComponent } from './backend/products/products.component';
import { HomeComponent } from './frontend/home/home.component'; 
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      { path: 'product', component: ProductsComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'product/:id', component: ProductEditComponent }
    ]
  },
  {path: 'product/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
