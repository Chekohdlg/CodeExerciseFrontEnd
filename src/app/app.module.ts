import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";




import { ProductsPageComponent } from './Products/Pages/products-page/products-page.component';
import { ProductsTableComponent } from './Products/Components/ProductsTable/products-table.component';
import { ProductCardComponent } from './Products/Components/product-card/product-card.component';

import { ProductsService } from './Products/Services/products.service';
import { CreateProductComponent } from './Products/Components/create-product/create-product.component';
import { ConfirmationDialogComponent } from './Products/Components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsTableComponent,
    ProductCardComponent,
    CreateProductComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ProductsService, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
