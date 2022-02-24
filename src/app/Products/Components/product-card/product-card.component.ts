import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';
import { ProductsPageComponent } from '../../Pages/products-page/products-page.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;
  
  
  constructor(private productService: ProductsService,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  DeleteProduct():void{

    this.productService.DeleteProduct(this.product?.id||0).subscribe(response=>{
     
      this.productService.LoadProductList();
    }, error=>{
      alert("An error ocurred while is deleting. check the logs")
    })
  }


  EditProduct(): void {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '100%',
      data:   this.product ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.productService.LoadProductList();
    });
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
