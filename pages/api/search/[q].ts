import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import Product from "./../../../models/Product";
import { IProduct } from "./../../../interfaces/products";

type Data = { msg: string } | IProduct[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { q = "" } = req.query;
  q = q.toString().toLowerCase();

  db.connect();

  const products = await Product.find({ $text: { $search: q } }).select(
    "title images price inStock slug -_id"
  );

  if (!products.length) {
    res.status(404).json({ msg: "product not found" });
  }
  res.status(200).json(products);

  db.disconnect();
}
