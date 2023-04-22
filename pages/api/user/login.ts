// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models";
var jwt = require("jsonwebtoken");
import bcrypt from "bcrypt";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return loginUser(req, res);

    default:
      res.status(400).json({
        message: "BAD REQUEST",
      });
  }
}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { email = "", password = "" } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "user or password incorrect" });
  }
  const isPasswordOk = await bcrypt.compare(password, user.password);
  if (!isPasswordOk) {
    return res.status(400).json({ message: "user or password incorrect" });
  }
  const {_id, role, name } = user;

  const token = jwt.sign({_id, role, name, email }, process.env.SECRETKEY);

  res.status(200).json({ user: { role, name, email }, token });
};
