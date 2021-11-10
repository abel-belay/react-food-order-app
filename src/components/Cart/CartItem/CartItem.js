import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const CartItem = (props) => {
  const { item } = props;
  const { dispatchCart } = useContext(CartContext);

  const addToCartClickHandler = () => {
    dispatchCart({
      type: "ADD_ITEM",
      item: {
        ...item,
        quantity: 1,
      },
    });
  };

  const removeFromCartClickHandler = () => {
    dispatchCart({
      type: "REMOVE_ITEM",
      item: {
        ...item,
        quantity: 1,
      },
    });
  };

  return (
    <div className={styles["cart-item"]}>
      <div className={styles.about}>
        <h4 className={styles.name}>{item.name}</h4>
        <div className={styles.details}>
          <p className={styles.price}>${item.price.toFixed(2)}</p>
          <p className={styles.quantity}>x{item.quantity}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={removeFromCartClickHandler}>-</button>
        <button onClick={addToCartClickHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItem;
