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
  user:{
    name: string;    
    role: "admin" | "client";
    email: string;
  } 
  token: string
}  