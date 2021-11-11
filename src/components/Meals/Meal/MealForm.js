import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input";
import { useContext, useRef } from "react";
import CartContext from "../../../store/CartContext";

const MealForm = (props) => {
  const { meal } = props;

  const { dispatchCart } = useContext(CartContext);

  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (+inputRef.current.value < 1) {
      return
    }

    dispatchCart({
      type: "ADD_ITEM",
      item: {
        ...meal,
        quantity: +inputRef.current.value,
      },
    });
  };

  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        name="quantity"
        label="Amount"
        input={{ type: "number", id: props.id, min: "1", step: "1" }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealForm;
