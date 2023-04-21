import { FC, useReducer, useEffect } from "react";
import { ICartProduct, OrderSummary } from "../../interfaces";
import { CartContext, CartReducer } from "./";
import Cookie from "js-cookie";

export interface CartState {
  cart: ICartProduct[];
  summary: OrderSummary;
}

const Cart_inicitialState: CartState = {
  cart: [],
  summary: { total: 0, quantityunit: 0, quantityItems: 0, tax: 0, subTotal: 0 },
};
interface Props {
  children: React.ReactNode;
}

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, Cart_inicitialState);

  useEffect(() => {
    const isThereCookie = Cookie.get("cart")
      ? JSON.parse(Cookie.get("cart")!)
      : [];

    dispatch({
      type: "[Cart] - LoadCart from cookies | storage",
      payload: isThereCookie,
    });
  }, []);

  useEffect(() => {
    if (state.cart.length > 0) Cookie.set("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const orderSumary = {
      subTotal: state.cart.reduce((acc, product) => {
        acc = acc + product.price * product.quantity;

        return acc;
      }, 0),
      quantityunit: state.cart.reduce(
        (acc, product) => acc + product.quantity,
        0
      ),
      quantityItems: state.cart.length,
      tax: 0,
      total: 0,
    };

    orderSumary.tax = parseFloat((orderSumary.subTotal * 0.1).toFixed(2));
    orderSumary.total = orderSumary.subTotal + orderSumary.tax;

    dispatch({ type: "[Cart] - Order Summary", payload: orderSumary });
  }, [state.cart]);

  const handleAddProductInCart = (payload: ICartProduct) => {
    const productIncart = state.cart.some(
      (p) => p._id === payload._id && p.sizes === payload.sizes
    );
    if (!productIncart)
      return dispatch({
        type: "[Cart] - Add Product",
        payload: [...state.cart, payload],
      });

    const updateProduct = state.cart.map((p) =>
      p._id === payload._id ? { ...p, quantity: p.quantity + 1 } : p
    );

    dispatch({ type: "[Cart] - Add Product", payload: updateProduct });
  };

  const updateCartQuantity = (payload: ICartProduct) => {
    const updateProduct = state.cart.map((p) =>
      p._id === payload._id && p.sizes === payload.sizes ? payload : p
    );
    dispatch({
      type: "[Cart] - Update quantity Product",
      payload: updateProduct,
    });
  };

  const removeFromCart = (payload: ICartProduct) => {
    const removeProduct = state.cart.filter(
      (p) => !(p._id === payload._id && p.sizes === payload.sizes)
    );

    Cookie.set("cart", JSON.stringify(removeProduct));
    dispatch({ type: "[Cart] - remove Product", payload: removeProduct });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        handleAddProductInCart,
        updateCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
