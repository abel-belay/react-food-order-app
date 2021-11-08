import Meal from "../Meal/Meal";
import Card from "../../UI/Card/Card";
import styles from "./MealsList.module.css";

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.50,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const MealsList = () => {
  const mealComponents = DUMMY_MEALS.map((meal) => (<li key={meal.id}><Meal name={meal.name} description={meal.description} price={meal.price} id={meal.id} /></li>))

  return (
    <Card>
      <ul className={styles.list}>
        {mealComponents}
      </ul>
    </Card>
  );
};

export default MealsList;
