import { FC, useReducer, useEffect, useRef } from "react";
import { IAddress, IAuth } from "../../interfaces/user";
import { AuthContext, AuthReducer } from "./";
import Cookies from "js-cookie";
import { validateToken } from "../../api/apiAuth";

export interface AuthState {
  user: IAuth | null;
  address: IAddress | null;
}

const User_inicitialState: AuthState = {
  user: null,
  address: null,
};
interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  let isFirstRender = useRef(true);
  const [state, dispatch] = useReducer(AuthReducer, User_inicitialState);

  useEffect(() => {
    if (isFirstRender.current && Cookies.get("token")) {
      checkToken();
    }
    isFirstRender.current = false;
  }, []);
  useEffect(() => {
    const address = Cookies.get("address")
    if (address) {
      const parseAddress = JSON.parse(address)
      handleStateAddressUser(parseAddress)
    }
    
  }, []);

  const checkToken = async () => {
    try {
      const data = await validateToken();

      if (!data.token) {
        Cookies.remove("token");
      }

      if (data) {
        dispatch({
          type: "[user] - Login",
          payload: data,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStateUser = (user: IAuth) => {
    dispatch({
      type: "[user] - Login",
      payload: user,
    });
    Cookies.set("token", JSON.stringify(user.token));
  };

  const handleStateAddressUser = (address: IAddress) => {
    dispatch({
      type: "[user] - Address",
      payload: address,
    });
    Cookies.set("address", JSON.stringify(address));
  };

  const handleLogOut = () => {
    dispatch({
      type: "[user] - Logout",
    });
    Cookies.remove("token");
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleStateUser,
        handleLogOut,
        handleStateAddressUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
