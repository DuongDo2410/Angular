import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../product';
import { ProductService } from '../../product.service';

@Component ({
    selector: 'app-products',
    templateUrl: './products.component.html',
    // styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    // @Input('data') products: Product[];
    products: Product[];
    data: Product;

    myClass = 'table-bordered';
    constructor(private productService: ProductService) {}
    
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        })
        // this.products = this.productService.getProducts();
    }
    
    removeItem(id: number) {
        this.productService.removeProduct(id).subscribe(data => {
            const question =window.confirm('Bạn có chắc muốn xóa không?');
        if(question){
            this.products = this.products.filter(item => item.id != data.id);
        }
          
        });
      }
    onSubmit(event: any) {
        event.preventDefault();
    }
    
    detailItem(product: Product) {
        this.data = product;
    }
}