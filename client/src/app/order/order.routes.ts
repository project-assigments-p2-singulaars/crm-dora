import { Route } from "@angular/router";
import { NewOrderFormPageComponent } from "./pages/new-order-form-page/new-order-form-page.component";
import { OrderDetailPageComponent } from "./pages/order-detail-page/order-detail-page.component";
import { OrderListPageComponent } from "./pages/order-list-page/order-list-page.component";

export const ORDER_ROUTES: Route[] = [
  { path: '', component: OrderListPageComponent},
  { path: 'products', component: OrderListPageComponent},
  { path: 'detail/:id', component: OrderDetailPageComponent },
  { path: 'new', component: NewOrderFormPageComponent },
]