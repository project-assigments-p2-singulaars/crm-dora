import { Route } from "@angular/router";
import { CustomerListPageComponent } from "./pages/customer-list-page/customer-list-page.component";
import { CustomerDetailPageComponent } from "./pages/customer-detail-page/customer-detail-page.component";
import { NewCustomerFormPageComponent } from "./pages/new-customer-form-page/new-customer-form-page.component";

export const CUSTOMER_ROUTES: Route[] = [
  { path: '', component: CustomerListPageComponent },
  { path: 'customers', component: CustomerListPageComponent},
  { path: 'detail/:id', component: CustomerDetailPageComponent },
  { path: 'new', component: NewCustomerFormPageComponent },
]