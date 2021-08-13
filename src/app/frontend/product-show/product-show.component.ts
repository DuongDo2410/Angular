import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from "../../product";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  products: Product[];
  data: Product;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
  
}
