import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { }
  product: Product;
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getById(params["productId"]).subscribe(data=>{
        this.product = data
      });
    });
  }
  delete(){
    this.product = Object.assign({},this.product)
    this.productService.deleteProduct(this.product).subscribe(data=>{
      this.router.navigate(['/product'])

    });
  }
}
