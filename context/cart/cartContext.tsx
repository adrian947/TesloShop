import { createContext } from 'react';
import { ICartProduct, OrderSummary } from '../../interfaces';

interface ContextProps {
    cart: ICartProduct[];
    summary: OrderSummary;
    handleAddProductInCart: (payload:ICartProduct)=> void
    updateCartQuantity: (payload:ICartProduct)=> void
    removeFromCart: (payload:ICartProduct)=> void
}

export const CartContext = createContext({} as ContextProps);