import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductService } from './components/store/products-list/products-list.component.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/store/products-list/product-item/product-item.component';
import { ProductsListComponent } from './components/store/products-list/products-list.component';
import { StoreComponent } from './components/store/store.component';
import { FilterComponent } from './components/store/products-list/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StoreComponent,
    ProductsListComponent,
    ProductItemComponent,
    FilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
