import { AuthState } from ".";
import { IAddress, IAuth } from "../../interfaces/user";

type AuthActionType = {
  type: "[user] - Login" | "[user] - Logout" | "[user] - Address";
  payload?: IAuth | IAddress;
};

export const AuthReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[user] - Login":
      return {
        ...state,
        user: { ...action.payload } as IAuth,
      };
    case "[user] - Logout":
      return {
        ...state,
        user: null,
      };
    case "[user] - Address":
      return {
        ...state,
        address: { ...action.payload } as IAddress,
      };

    default:
      return state;
  }
};
