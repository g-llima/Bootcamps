import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private url = 'https://fakestoreapi.com/products/';

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
