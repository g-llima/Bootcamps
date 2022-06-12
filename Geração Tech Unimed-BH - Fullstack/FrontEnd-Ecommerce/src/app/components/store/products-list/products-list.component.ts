import { Component, OnInit } from '@angular/core';
import { Product } from './model/Product';
import { ProductService } from './products-list.component.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.retrieveAll().subscribe((data) => {
      this.products = data;
      console.log(data);
    });
  }
}
