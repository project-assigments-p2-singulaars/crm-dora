import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductFormComponent } from './product/components/product-form/product-form.component';

export const routes: Routes = [
  { path: '', component: LayoutComponent, 
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', redirectTo: '' },
      { path: 'customers', loadChildren: () => 
        import('./customer/customer.routes')
          .then( mod => {
              return mod.CUSTOMER_ROUTES;
          })
      },
      { path: 'orders', component: OrderListComponent },
      { path: 'products', loadChildren: () => 
        import('./product/product.routes')
          .then( mod => mod.PRODUCT_ROUTES )
       },
    ],
  },
  { path: 'new-product', component: ProductFormComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundPageComponent }
];
