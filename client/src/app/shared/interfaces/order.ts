import { Product } from './product';

export interface Address{
  addressLine: string;
  country: string;
  city?: string;
  postalCode?: string;
  phone?: string;
}

export interface Order {
  id?: number;
  orderDate: string;
  totalPrice: number;
  products?: Product[];
  customerId: number;
  shippmentAddress?: Address;
}