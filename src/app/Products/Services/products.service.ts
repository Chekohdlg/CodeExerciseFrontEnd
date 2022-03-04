import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

import {environment} from '../../../environments/environment'

@Injectable()
export class ProductsService {
   
   private  readonly urlBase= environment.URL_BASE;
   public products: Product[] = [];
   constructor(private httpClient: HttpClient) {
    
    }


  LoadProductList():void{
    this.products = [];
    this.GetProducts().subscribe(response=>{
      this.products = response as Product[];
    })
  }

  GetProducts(){
    return this.httpClient.get<Product[]>(this.urlBase);
  }

  SaveProduct(product: Product){  
    return this.httpClient.post(this.urlBase, product);
  }

  DeleteProduct(idProduct: number){  
    return this.httpClient.delete(`${this.urlBase}/${idProduct}`);
  }

  UpdateProduct(product:Product, productId:number){
    return this.httpClient.put(`${this.urlBase}/${productId}`, product);
  }


}
