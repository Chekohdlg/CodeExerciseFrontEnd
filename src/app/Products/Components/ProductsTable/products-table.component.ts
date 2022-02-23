import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Product } from '../../Models/Product';

import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  dataSource:MatTableDataSource<Product>=new MatTableDataSource<Product>();;
  constructor(private productService:ProductsService) {
   
   }
  ngOnInit(): void {
    this.productService.GetProducts().subscribe(result=>{
      console.log(result);
      this.dataSource.data = result as Product[];

    });
  }
  
  displayedColumns: string[] = ['id', 'name', 'description','company', 'ageRestriction','imageUrl'];
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator ;
  }

}
