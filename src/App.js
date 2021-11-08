import React, {useContext} from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals/Meals";
import Cart from "./components/Cart/Cart/Cart";
import ShowCartContext from "./store/ShowCartContext";

function App() {
  const {showCart} = useContext(ShowCartContext);
  console.log("App Component Rendered!");

  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
