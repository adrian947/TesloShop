import { AuthState } from ".";
import { IAuth } from "../../interfaces/user";

type AuthActionType = {
  type: "[user] - Login";
  payload: IAuth;
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

    default:
      return state;
  }
};
