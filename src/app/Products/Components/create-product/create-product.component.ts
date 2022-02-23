import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService) {
    this.productForm = this.fb.group({
      Id: new FormControl(0),
      Name: new FormControl('', [Validators.required,Validators.maxLength(50)]),
      Description: new FormControl('', Validators.maxLength(100)),
      AgeRestriction: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      Company: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      Price: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(1000)]),
      ImageUrl: new FormControl()
    });
   }

  ngOnInit(): void {
    // this.productForm.valueChanges.subscribe(changes=>{
    //   console.log(changes);
      
    // })
  }

  submit(){
    const product = this.productForm.getRawValue();
   console.log(product);
   
    this.productService.SaveProduct(product).subscribe(response=>{
      console.log(response);
      
    });


  }



}
