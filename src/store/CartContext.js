import React, { useState } from "react";

const CartContext = React.createContext({});

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([
    { id: "c1", name: "Sushi", price: 19.99, quantity: 1 },
    { id: "c2", name: "Pizza", price: 12.99, quantity: 1 },
  ]);

  const addToCartHandler = (item) => {
    setCart((cart) => {
      const test = cart.map((cartItem) => {
        if (cartItem.name === item.name) {
          return {...cartItem, quantity: cartItem.quantity + item.quantity}
        } else {
          return cartItem
        }
      })

      return test;
    })
  }

  return (
    <CartContext.Provider value={{ setCart, cart, addToCartHandler }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
