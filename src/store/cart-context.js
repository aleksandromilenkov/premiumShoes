import React from "react";
// creaeting the context
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  clearCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  cartIsOpen: false,
  openCart: () => {},
  closeCart: () => {},
});

export default CartContext;
