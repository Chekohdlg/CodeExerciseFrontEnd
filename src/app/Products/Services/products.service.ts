import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable()
export class ProductsService {
   
   private  readonly urlBase= "https://localhost:44365/api/Products";
  
   constructor(private httpClient: HttpClient) {
    
    }

  GetProducts(){
    return this.httpClient.get<Product[]>(this.urlBase);
  }

  SaveProduct(product: Product){
    console.log("Data to save",product);
    
    return this.httpClient.post(this.urlBase, product);
  }

}
