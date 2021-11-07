import React from "react";
import styles from "./Meal.module.css";

const Meal = (props) => {
  return (
    <div className={styles.meal}>
      <div className={styles.about}>
        <h4>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <form className={styles.order}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </div>
  );
};

export default Meal;
