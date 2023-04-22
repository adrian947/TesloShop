// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models";
import { IUser } from "../../../interfaces/user";
const jwt = require("jsonwebtoken");

type Data = any;

interface JwtPayload {
  email: string;
  role: string;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return checkJWT(req, res);

    default:
      res.status(400).json({
        message: "BAD REQUEST",
      });
  }
}

const checkJWT = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { token = "" } = req.cookies;

  const parsedToken = token ? JSON.parse(token) : null;

  const userVerify = new Promise<JwtPayload>((resolve, reject) => {
    jwt.verify(
      parsedToken,
      process.env.SECRETKEY,
      (err: any, payload: IUser) => {
        if (err) reject("invalid token");
        resolve(payload);
      }
    );
  });
  try {
    const user = await userVerify;

    const { email } = user;

    const userVerified = await User.findOne({ email });
    if (!userVerified) {
      return res
        .status(400)
        .json({ message: "invalid token or user not exist" });
    }

    const { role, name } = userVerified;

    const newToken = jwt.sign({ role, name, email }, process.env.SECRETKEY);

    return res.status(200).json({ token: newToken, role, name, email });
  } catch (error) {
    res.status(400).json({ message: "invalid token" });
  }
};
