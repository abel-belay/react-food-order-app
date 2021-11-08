import React from "react";
import styles from "./Header.module.css";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import mealsImage from "../../../assets/meals.jpeg";

const Header = () => {

  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>React Meals</h1>
          <HeaderCartButton />
        </div>
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food." />
      </div>
    </React.Fragment>
  );
};

export default Header;
