import React from "react";
import styles from "./Meal.module.css";
import MealForm from "./MealForm";

const Meal = (props) => {
  return (
    <div className={styles.meal}>
      <div className={styles.about}>
        <h4>{props.name}</h4>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <MealForm id={props.id} />
    </div>
  );
};

export default Meal;
