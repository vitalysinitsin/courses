import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/ProductModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = '';

  constructor(private httpClient: HttpClient) {}

  GetAll() {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }

  GetById(id: number) {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`);
  }

  Create(data: Product) {
    this.httpClient.post(`${this.baseUrl}/${data.id}`, data);
  }

  Delete(id: number) {
    this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
