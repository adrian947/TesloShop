import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "./../../../interfaces/products";

type Data = { msg: string };

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(404).json({ msg: "Must be have query search" });
}
