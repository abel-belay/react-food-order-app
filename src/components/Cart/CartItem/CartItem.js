import styles from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/CartContext";

const CartItem = (props) => {
  const {item} = props;
  const {addToCartHandler} = useContext(CartContext);

  const addToCartClickHandler = () => {
    addToCartHandler({...item, quantity: 1})
  }

  return (
    <div className={styles["cart-item"]} >
      <div className={styles.about}>
        <h4 className={styles.name}>{item.name}</h4>
        <p className={styles.price}>${item.price}</p>
        <input className={styles.input} type="number" value={item.quantity} />
      </div>
      <div className={styles.actions}>
        <button>-</button>
        <button onClick={addToCartClickHandler}>+</button>
      </div>
    </div>
  )
}

export default CartItem;