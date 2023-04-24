export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "admin" | "client";
  createdAt: string;
  updatedAt: string;
}

export interface IAuth {
  name?: string;
  role?: "admin" | "client";
  email?: string;
  token?: string;
  user?: any;
}

export interface IAddress {
  name: string | null;
  surname: string;
  address: string;
  address2?: string;
  city: string;
  cp: string;
  phone: string;
  country: string;
}
