import { Routes } from '@angular/router';
import { ProductsList as ProductsListPage } from './pages/products-list/products-list';
import { Cart as CartPage } from './pages/cart/cart';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductsListPage,
    },
    {
        path: 'cart',
        component: CartPage,
    },
];
