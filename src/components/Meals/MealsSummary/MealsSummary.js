import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <div className={styles["meals-summary"]}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with high quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </div>
  );
};

export default MealsSummary;
