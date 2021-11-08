import styles from "./MealForm.module.css";
import Input from "../../UI/Input/Input";

const MealForm = (props) => {
  return (
    <form className={styles.form}>
      <Input label="Amount" input={{ type: "number", id: props.id, min: "1", step: "1" }} />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealForm;
