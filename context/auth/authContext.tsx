import { createContext } from "react";
import { IAuth } from "../../interfaces/user";

interface ContextProps {
  user: IAuth | {};
  handleStateUser: (user: IAuth) => void
}

export const AuthContext = createContext({} as ContextProps);
