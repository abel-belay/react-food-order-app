import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import ShowCartContext from "../../../store/ShowCartContext";
import CartContext from "../../../store/CartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { setShowCart } = useContext(ShowCartContext);
  const { cart } = useContext(CartContext);

  const hideCartButtonClickHandler = () => {
    setShowCart(false);
  };

  const cartItemComponents = cart.map((item) => (
    <li key={item.id}>
      <CartItem item={item} />
    </li>
  ));

  const totalCost = cart.reduce((total, cartItem) => {
    return Math.round((total + cartItem.price * cartItem.quantity) * 100) / 100;
  }, 0);

  return (
    <Modal>
      <ul>{cartItemComponents}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>${totalCost}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles["button-alt"]}`}
          onClick={hideCartButtonClickHandler}
        >
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
