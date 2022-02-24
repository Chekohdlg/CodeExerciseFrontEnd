import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  private isEditing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productForm = this.fb.group({
      Id: new FormControl(0),
      Name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      Description: new FormControl('', Validators.maxLength(100)),
      AgeRestriction: new FormControl(0, [
        Validators.min(0),
        Validators.max(100),
      ]),
      Company: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      Price: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(1000),
      ]),
      ImageUrl: new FormControl(),
    });
  }

  ngOnInit(): void {
    console.log(this.data);
    this.productForm.valueChanges.subscribe((changes) => {
      console.log('Values changed =>', changes);
    });
    if (this.data) {
      this.isEditing = true;
      this.setFormData(this.data);
    }
  }

  setFormData(product: Product) {
    this.productForm.setValue({
      Id: product.id,
      Name: product.name,
      Description: product.description,
      AgeRestriction: product.ageRestriction,
      Company: product.company,
      Price: product.price,
      ImageUrl: product.imageUrl,
    });

    this.productForm.updateValueAndValidity();
  }

  submit() {
    if (this.isEditing) 
      this.UpdateProduct();
    else 
      this.SaveProduct();
  }

  UpdateProduct() {
    const product = this.getProductFromForm();
    console.log(product);
    this.productService
      .UpdateProduct(product, product.Id)
      .subscribe((response) => {
        this.dialogRef.close(response);
      })
    
  }
  SaveProduct() {
    const product = this.getProductFromForm();
    console.log(product);

    this.productService
      .SaveProduct(product)
      .subscribe((response) => {
        this.dialogRef.close(response);
      })
      
  }

  getProductFromForm() {
    return this.productForm.value;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
