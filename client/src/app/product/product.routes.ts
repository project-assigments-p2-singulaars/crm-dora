import { Route } from "@angular/router";
import { ProductListPageComponent } from "./pages/product-list-page/product-list-page.component";
import { ProductDetailPageComponent } from "./pages/product-detail-page/product-detail-page.component";
import { NewProductFormPageComponent } from "./pages/new-product-form-page/new-product-form-page.component";

export const PRODUCT_ROUTES: Route[] = [
  { path: '', component: ProductListPageComponent},
  { path: 'products', component: ProductListPageComponent},
  { path: 'detail/:id', component: ProductDetailPageComponent },
  { path: 'new', component: NewProductFormPageComponent },
]