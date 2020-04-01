import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {
  product:Product;
  editForm:FormGroup;
  constructor(
    private productService:ProductService, 
    private activatedRoute:ActivatedRoute,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      productId:[""],
      categoryId:[""],
        productName:[""],
        unitsInStock:[""],
        quantityPerUnit:[""],
        unitPrice:[""],
    });
    // this.productService.getById(productId).subscribe(data=>{
    //   this.editForm.setValue(data)
    // });




    this.activatedRoute.params.subscribe(params=>{
      this.productService.getById(params["productId"]).subscribe(data=>{
        this.editForm.setValue(data)
      });
    });

  }
  update(){
    if(this.editForm.valid){
      this.product = Object.assign({},this.editForm.value)
    }
    this.productService.updateProduct(this.product).subscribe(data=>{
          this.router.navigate(['/product'])
    
    });
  }
}
