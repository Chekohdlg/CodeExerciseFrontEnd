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
    this.productService.LoadProductList();;
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(CreateProductComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.productService.LoadProductList();;
    });
  }

  
}
