import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from 'app/pages/product/product.component';
import { ProductAddComponent } from 'app/pages/product/product-add/product-add.component';
import { LoginComponent } from 'app/pages/auth/login/login.component';
import { RegisterComponent } from 'app/pages/auth/register/register.component';
import { ProductDetailComponent } from 'app/pages/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from 'app/pages/product/product-delete/product-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from 'app/pages/product/product-filter.pipe';
import { ProductEditComponent } from 'app/pages/product/product-edit/product-edit.component';
import { CategoryComponent } from 'app/pages/category/category.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    ProductEditComponent,
    LoginComponent,
    RegisterComponent,
    ProductFilterPipe,
    CategoryComponent
  ]
})

export class AdminLayoutModule {}
