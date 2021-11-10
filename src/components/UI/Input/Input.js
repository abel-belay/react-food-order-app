import styles from "./Input.module.css";
import React, {useEffect} from "react";

const Input = React.forwardRef((props, ref) => {

  useEffect(() => {
    ref.current.value = 1;
  }, [ref])

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
