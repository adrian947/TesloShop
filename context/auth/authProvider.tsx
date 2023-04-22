import { FC, useReducer, useEffect, useRef } from "react";
import { IAuth } from "../../interfaces/user";
import { AuthContext, AuthReducer } from "./";
import Cookies from "js-cookie";
import { baseAxios } from "../../api";
import { validateToken } from "../../api/apiAuth";

export interface AuthState {
  user: IAuth | {};
}

const User_inicitialState: AuthState = {
  user: {},
};
interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  let isFirstRender = useRef(true);
  const [state, dispatch] = useReducer(AuthReducer, User_inicitialState);

  useEffect(() => {
    if (isFirstRender.current) {
      checkToken();
    }
    isFirstRender.current = false;
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

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleStateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
