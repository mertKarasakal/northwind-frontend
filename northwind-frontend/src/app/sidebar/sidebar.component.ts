import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',title: 'Dashboard',icon:'nc-bank',class: '' },
    { path: '/product',title: 'Products',icon:'nc-diamond',class: '' },
    { path: '/productAdd',title: 'Add product',icon:'nc-app',class: '' },
    { path: '/login',title: 'Login ',icon:'nc-key-25',class: '' },
    { path: '/register',title: ' Register ',icon:'nc-badge',class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
