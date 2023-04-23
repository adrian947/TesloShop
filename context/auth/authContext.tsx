import { createContext } from "react";
import { IAuth } from "../../interfaces/user";

interface ContextProps {
  user: IAuth | null;
  handleStateUser: (user: IAuth) => void;
  handleLogOut: ()=> void;
}

export const AuthContext = createContext({} as ContextProps);
