import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ProductResponse } from '../Types/ProductTypes';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpclient = inject(HttpClient)

  public getAllProducts() {
    const apiurl = environment.DUMMY_JSON_API + "/products"
    const httpparams = new HttpParams()
    httpparams.append("limit", 40)
    return this.httpclient.get<ProductResponse>(apiurl, {
      params: httpparams
    })
  }
}
