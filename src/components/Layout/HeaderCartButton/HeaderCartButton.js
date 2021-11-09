import {useContext} from "react";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../Cart/CartIcon/CartIcon";
import ShowCartContext from "../../../store/ShowCartContext";
import CartContext from "../../../store/CartContext";


const HeaderCartButton = () => {
  const {setShowCart} = useContext(ShowCartContext);
  const {cart} = useContext(CartContext);

  const showCartButtonClickHandler = () => {
    setShowCart(true);
  }

  const cartSize = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0)

  return (
    <button className={styles.button} onClick={showCartButtonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge} >{cartSize}</span>
    </button>
  );
};

export default HeaderCartButton;
