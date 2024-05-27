export interface Customer {
  id?: number;
  companyName: string;
  contactName?: string;
  phone?: number;
  address?: string;
  email: string;
  orderIds?: number[];
}