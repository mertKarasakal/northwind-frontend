import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {

  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute) { }
  product : Product;
  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getById(params["productId"]).subscribe(data=>{
        this.product = data
      });
    });
  }

}
