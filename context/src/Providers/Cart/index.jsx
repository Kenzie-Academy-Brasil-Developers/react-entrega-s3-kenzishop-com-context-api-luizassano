import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(
      (itemOnCart) => itemOnCart.id !== product.id
			);
    setCart(newCart);
  };

return (
  <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
	{children}
  </CartContext.Provider>
 )
}