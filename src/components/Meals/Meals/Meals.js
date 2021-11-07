import React from "react";
import styles from "./Meals.module.css";
import MealsSummary from "../MealsSummary/MealsSummary";
import MealsList from "../MealsList/MealsList";

const Meals = () => {
  return (
    <React.Fragment>
      <section className={styles.section}>
        <MealsSummary />
        <MealsList />
      </section>
    </React.Fragment>
  );
};

export default Meals;
