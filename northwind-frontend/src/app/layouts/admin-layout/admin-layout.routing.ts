import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ProductComponent } from 'app/pages/product/product.component';
import { ProductAddComponent } from 'app/pages/product/product-add/product-add.component';
import { LoginComponent } from 'app/pages/auth/login/login.component';
import { RegisterComponent } from 'app/pages/auth/register/register.component';
import { ProductDetailComponent } from 'app/pages/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from 'app/pages/product/product-delete/product-delete.component';
import { ProductEditComponent } from 'app/pages/product/product-edit/product-edit.component';
import { LoginGuard } from 'app/pages/auth/login/login.guard';
import { CategoryComponent } from 'app/pages/category/category.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'product',      component: ProductComponent },
    {path: 'product/category/:categoryId', component:ProductComponent} ,
    { path: 'categories',      component: CategoryComponent },
    { path: 'productAdd',      component: ProductAddComponent },
    { path: 'productDetail/:productId',      component: ProductDetailComponent },
    { path: 'productEdit/:productId',      component: ProductEditComponent },
    { path: 'productDelete/:productId',      component: ProductDeleteComponent ,canActivate:[LoginGuard]},
    { path: 'login',      component: LoginComponent },
    { path: 'register',      component: RegisterComponent },
];
