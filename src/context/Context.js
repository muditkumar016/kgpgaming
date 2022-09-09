import React, { createContext, useContext, useReducer } from 'react'
import { Games } from '../data/data';
import { cartReducer } from './Reducers';

const Cart = createContext();

const Context = ({children}) => {
      const products = Games.map((game) => {
        return {
          id:game.ID,
          price:game.Price,
          name:game.Name,
          image:game.Image
        }
      })

    const [state, dispatch] = useReducer( cartReducer, {
      products: products,
      cart: [],
    });

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
