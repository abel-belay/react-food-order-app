import React, { useReducer } from "react";

const CartContext = React.createContext({});

const cartReducer = (cart, action) => {
  const { item } = action;

  if (action.type === "ADD_ITEM") {
    if (cart.find((cartItem) => cartItem.id === item.id) !== undefined) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          return { ...cartItem, quantity: cartItem.quantity + item.quantity };
        } else {
          return cartItem;
        }
      });
      return updatedCart;
    } else {
      const updatedCart = [...cart, { ...item }];
      return updatedCart.filter((cartItem) => (
        cartItem.quantity > 0
      ))
    }
  } else if (action.type === "REMOVE_ITEM") {
    const updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity - item.quantity };
      } else {
        return cartItem;
      }
    });
    return updatedCart.filter((cartItem) => (
      cartItem.quantity > 0
    ))
  }

};

export const CartContextProvider = (props) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatchCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
