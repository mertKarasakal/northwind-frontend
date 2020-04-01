import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {

  constructor(private productService:ProductService,
    private formBuilder:FormBuilder,
    private router:Router) { }

  productAddForm : FormGroup;
  product:Product = new Product();

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      categoryId:[""],
      productName:[""],
      unitsInStock:[""],
      quantityPerUnit:[""],
      unitPrice:[""],
    });
  }

  ngOnInit() {
    this.createProductAddForm();
     }
     add(){
      if(this.productAddForm.valid){
        this.product = Object.assign({},this.productAddForm.value)
      }
      this.productService.addProduct(this.product).subscribe(data=>{
        this.router.navigate(['/product'])

      });

  
    }
}
