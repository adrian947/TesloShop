import { createContext } from 'react';
import { ICartProduct } from '../../interfaces';

interface ContextProps {
    cart: ICartProduct[];
    handleAddProductInCart: (payload:ICartProduct)=> void
    updateCartQuantity: (payload:ICartProduct)=> void
    removeFromCart: (payload:ICartProduct)=> void
}

export const CartContext = createContext({} as ContextProps);