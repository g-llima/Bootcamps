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
  clicked: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.retrieveAll().subscribe((data) => {
      this.products = data;
    });
  }

  orderBy(clickedAt: number) {
    if (clickedAt == 1)
      this.products = this.products.sort((a, b) =>
        a.title >= b.title ? 1 : -1
      );
    else if (clickedAt == 2)
      this.products = this.products.sort((a, b) =>
        a.price <= b.price ? 1 : -1
      );
    else if (clickedAt == 3)
      this.products = this.products.sort((a, b) =>
        a.price >= b.price ? 1 : -1
      );
    else
      this.products = this.products.sort((a, b) =>
        a.category >= b.category ? 1 : -1
      );
  }
}
