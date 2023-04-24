import { createContext } from "react";
import { IAddress, IAuth } from "../../interfaces/user";

interface ContextProps {
  user: IAuth | null;
  address: IAddress | null;
  handleStateUser: (user: IAuth) => void;
  handleLogOut: ()=> void;
  handleStateAddressUser: (address: IAddress)=> void;
}

export const AuthContext = createContext({} as ContextProps);
