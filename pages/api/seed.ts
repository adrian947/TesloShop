// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db, seedDatabase, seedDatabaseUser } from "../../database";
import Product from "./../../models/Product";
import { User } from "../../models";
import { hashedUsers } from "./../../database/users";

type Data = {
  msg: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    res.status(401).json({ msg: "do not access API" });
  }

  await db.connect();

  await User.deleteMany();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await User.insertMany(await hashedUsers);

  await db.disconnect();

  res.status(200).json({ msg: "ok" });
}
