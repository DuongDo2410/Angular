import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'app-product-add',
    templateUrl: './product-add.component.html',
    // styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
    // @Output() data = new EventEmitter<Product>();
    
    product: Product = new Product();
    constructor(
      private productService: ProductService,
      private router: Router,
      ) {}
  
    ngOnInit() {}
  
    onAddProduct() {
      this.productService.addProduct(this.product).subscribe(data => {
        alert('Bạn đã cập nhật thành công');
        this.router.navigateByUrl('admin/product');
      });
    }
  }