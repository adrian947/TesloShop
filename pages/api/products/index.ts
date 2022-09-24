import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import Product from "../../../models/Product";
import { IProduct } from "../../../interfaces/products";

type Data = { msg: string } | IProduct[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      res.status(400).json({ msg: "error" });
  }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { gender = "all" } = req.query;

  const typesGender = ["men", "women", "kid", "unisex"];

  let conditionGender = {};
  if (gender !== "all" && typesGender.includes(gender)) {
    conditionGender = { gender };
  }

  {
    db.connect();
    const products = await Product.find(conditionGender)
      .select("title images price inStock slug -_id")
      .lean();
    res.status(200).json(products);
    db.disconnect();
  }
};
