import { db } from ".";
import { IProduct } from "../interfaces";
import { Product } from "../models";

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  await db.connect();
  const product = await Product.findOne({ slug });
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductsBySlug = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slug = await Product.find().select("slug -_id");
  await db.disconnect();

  return slug;
};

export const getProductsBySearchQuery = async (
  q: string
): Promise<IProduct[]> => {
  q = q.toString().toLowerCase();

  db.connect();

  const products = await Product.find({ $text: { $search: q } }).select(
    "title images price inStock slug -_id"
  );

  db.disconnect();
  return JSON.parse(JSON.stringify(products));
};
