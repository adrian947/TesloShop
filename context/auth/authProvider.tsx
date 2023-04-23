import { FC, useReducer, useEffect, useRef } from "react";
import { IAuth } from "../../interfaces/user";
import { AuthContext, AuthReducer } from "./";
import Cookies from "js-cookie";
import { baseAxios } from "../../api";
import { validateToken } from "../../api/apiAuth";

export interface AuthState {
  user: IAuth | null;
}

const User_inicitialState: AuthState = {
  user: null,
};
interface Props {
  children: React.ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  let isFirstRender = useRef(true);
  const [state, dispatch] = useReducer(AuthReducer, User_inicitialState);

  useEffect(() => {
    if (isFirstRender.current && Cookies.get('token')) {
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

  const handleLogOut = ()=>{
    dispatch({
      type: "[user] - Logout",
    })
    Cookies.remove("token");
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        handleStateUser,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
