import React from "react";
import styles from "./Meal.module.css";
import MealForm from "./MealForm";

const Meal = (props) => {
  const {meal} = props;
  return (
    <div className={styles.meal}>
      <div className={styles.about}>
        <h4>{meal.name}</h4>
        <p className={styles.description}>{meal.description}</p>
        <p className={styles.price}>${meal.price}</p>
      </div>
      <MealForm id={props.id} meal={meal} />
    </div>
  );
};

export default Meal;
