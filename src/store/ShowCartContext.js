import React, {useState} from "react";

const ShowCartContext = React.createContext({showCart: null});

export const ShowCartContextProvider = (props) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <ShowCartContext.Provider value={{showCart: showCart, setShowCart: setShowCart}}>
      {props.children}
    </ShowCartContext.Provider>
  )
}

export default ShowCartContext;