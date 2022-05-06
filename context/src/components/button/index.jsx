import { useContext } from "react";

import { CartContext } from "../../Providers/Cart";
import "./styles.css";

const Button = ({ type, product }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);


  const text = type === "catalogue" ? "COMPRAR" : "REMOVER";

  const handleClick = () => {
    if (type === "catalogue") {
      addToCart(product);
    } else {
      removeFromCart(product);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;