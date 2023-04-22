import { ICartProduct, OrderSummary } from "../../interfaces";
import { CartState } from ".";

type CartActionType =
  | {
      type: "[Cart] - LoadCart from cookies | storage";
      payload: ICartProduct[];
    }
  | { type: "[Cart] - Add Product"; payload: ICartProduct[] }
  | { type: "[Cart] - Update quantity Product"; payload: ICartProduct[] }
  | { type: "[Cart] - remove Product"; payload: ICartProduct[] }
  | { type: "[Cart] - Order Summary"; payload: OrderSummary };

export const CartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage":
    case "[Cart] - Add Product":
    case "[Cart] - Update quantity Product":
    case "[Cart] - remove Product":
      return {
        ...state,
        cart: [...action.payload],
      };
    case "[Cart] - Order Summary":
      return {
        ...state,
        summary: action.payload,
      };

    default:
      return state;
  }
};
