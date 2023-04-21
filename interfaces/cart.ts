import { ISize } from "./";

export interface ICartProduct {
  _id: string;
  images: string;
  price: number;
  sizes: ISize | null;
  slug: string;
  title: string;
  gender: "men" | "women" | "kid" | "unisex";  
  quantity: number;
  inStock: number,
}
