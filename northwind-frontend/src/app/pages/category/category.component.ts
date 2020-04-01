import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'app/services/category.service';
import { Category } from 'app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories : Category [] ;
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data
      console.log(JSON.stringify(data))
    });
  }

}
