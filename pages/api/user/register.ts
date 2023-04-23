// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models";
var jwt = require("jsonwebtoken");
import bcrypt from "bcrypt";
import { isValidEmail } from "./../../../helpers/validationEmail";
import { db } from "../../../database";

type Data = any;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "POST":
      return newUser(req, res);

    default:
      res.status(400).json({
        message: "BAD REQUEST",
      });
  }
}

const newUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { name, email, password } = req.body;

  const validatedEmail = isValidEmail(email);

  if (!validatedEmail) {
    return res.status(400).json({ message: "Invalid email" });
  }

  await db.connect();
  const user = await User.findOne({ email });
 
  if (user) {
    return res.status(400).json({ message: "This user already exists" });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be 6 characters or more" });
  }

  const passwordHash = bcrypt.hashSync(password, 10);

  const newUser = new User({    
    name,
    email,
    role: "client",
    password: passwordHash,
  });

  try {
    const {_id, role, name, email } = await newUser.save();

    const token = jwt.sign({_id,  role, name, email }, process.env.SECRETKEY);
    res.status(200).json({ user: { role, name, email }, token });
  } catch (error) {
    return res.status(400).json({ message: "User is not created" });
  }
  await db.disconnect();
};
