import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/services/product.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute) { }
    title="Ürün listesi";
    filterText = "";
    products : Product[];
    
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProductsByCategory(params["categoryId"]).subscribe(data=>{
        this.products = data
      });
    });
  }

}
