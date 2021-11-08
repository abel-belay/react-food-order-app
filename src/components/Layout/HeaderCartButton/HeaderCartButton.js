import {useContext} from "react";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../Cart/CartIcon/CartIcon";
import ShowCartContext from "../../../store/ShowCartContext";


const HeaderCartButton = () => {
  const {setShowCart} = useContext(ShowCartContext);

  const showCartButtonClickHandler = () => {
    setShowCart(true);
  }

  return (
    <button className={styles.button} onClick={showCartButtonClickHandler}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge} >3</span>
    </button>
  );
};

export default HeaderCartButton;
