import { AuthState } from ".";
import { IAuth } from "../../interfaces/user";

type AuthActionType = {
  type: "[user] - Login" | "[user] - Logout";
  payload?: IAuth;
};

export const AuthReducer = (
  state: AuthState,
  action: AuthActionType
): AuthState => {
  switch (action.type) {
    case "[user] - Login":
      return {
        ...state,
        user: { ...action.payload },
      };
    case "[user] - Logout":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
