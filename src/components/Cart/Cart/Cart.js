import { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import ShowCartContext from "../../../store/ShowCartContext";


const DUMMY_CART_ITEMS = [{ id: "c1", name: "Sushi", price: 12.99, amount: 2 }];

const Cart = () => {
  const {setShowCart} = useContext(ShowCartContext);

  const hideCartButtonClickHandler = () => {
    setShowCart(false);
  }

  const cartItemComponents = DUMMY_CART_ITEMS.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));


  return (
    <Modal>
      <ul>{cartItemComponents}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={`${styles.button} ${styles["button-alt"]}`} onClick={hideCartButtonClickHandler}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
