export interface Product {
  id?: number;
  title?: string;
  author?:string;
  publication_year?:number;
  genre?: string[];
  description?: string;
  price?: number;
  image?: string;
  rating?: number;
}