import { IUser } from "../interfaces/user";

const jwt = require("jsonwebtoken");

interface JwtPayload {
  email: string;
  role: string;
  name: string;
}

export const validatedToken = (parsedToken: string) => {
  
  return new Promise<JwtPayload>((resolve, reject) => {
    jwt.verify(
      parsedToken,
      process.env.SECRETKEY,
      (err: any, payload: IUser) => {
        if (err) reject("invalid token");
        resolve(payload);
      }
    );
  });
};


