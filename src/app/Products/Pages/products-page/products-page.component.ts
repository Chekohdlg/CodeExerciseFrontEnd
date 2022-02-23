import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../Models/Product';
import { ProductsService } from '../../Services/products.service';
import { CreateProductComponent } from '../../Components/create-product/create-product.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
 
  constructor(
    public productService: ProductsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.productService.GetProducts().subscribe((result) => {
      console.log(result);
      this.productService.products = result as Product[];
    });
  }

  openDialog(): void {
    console.log("trying to open a dialog");
    
    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '100%',
      data: { name: 'test', animal: 'test' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log('The dialog was closed', result);
      this.loadData();
    });
  }

  
}
