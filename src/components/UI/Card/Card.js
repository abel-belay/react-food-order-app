import styles from "./Card.module.css";

const Card = (props) => {
  console.log(props.color);
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
