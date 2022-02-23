import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';
import { ProductsPageComponent } from '../../Pages/products-page/products-page.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;
  
  
  constructor(private productService: ProductsService, private pageList:ProductsPageComponent,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  DeleteProduct():void{

    this.productService.DeleteProduct(this.product?.id||0).subscribe(response=>{
      console.log(response);
      this.pageList.loadData();
    })
  }


  ShowConfirm(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: `Are you sure?`
      })
      .afterClosed()
      .subscribe((confirm: Boolean) => {
        if (confirm) {
          this.DeleteProduct();
        }
      });
  }

}
