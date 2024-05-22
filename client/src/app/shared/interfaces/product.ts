export interface Product {
  id?: number;
  title: string;
  author?: string;
  image?: string;
  stock?: number;
  publicationDate?: number;
  genres?: string[];
  description?: string;
  price: number;
  salePrice?: number;
  rating?: number;
}