import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ShowCartContext from "../../../store/ShowCartContext";
import styles from "./Modal.module.css";

const Backdrop = () => {
  const { setShowCart } = useContext(ShowCartContext);
  const hideCartClickHandler = () => {
    setShowCart(false);
  };

  return <div className={styles.backdrop} onClick={hideCartClickHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
    </React.Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
