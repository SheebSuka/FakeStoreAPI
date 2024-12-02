import { Component, OnInit } from '@angular/core';
import type { Product } from '../../models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  title = 'Product List';
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void {
    this.productsService.getProducts()
    .subscribe(products => this.products = products);
  }
}
