import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable()
export class ProductsService {
   
   private  readonly urlBase= "https://localhost:44365/api/Products";
   public products: Product[] = [];
   constructor(private httpClient: HttpClient) {
    
    }


  LoadProductList():void{
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
    console.log('updating in service',product);
    
    return this.httpClient.put(`${this.urlBase}/${productId}`, product);
  }


}
