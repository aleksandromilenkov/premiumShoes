import React, { useContext, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Shoes from "./components/Shoes/Shoes";
import CartContext from "./store/cart-context";
function App() {
  const ctx = useContext(CartContext);
  console.log(ctx.cartIsOpen);
  return (
    <>
      {ctx.cartIsOpen && <Cart />}
      <Header />
      <Shoes />
    </>
  );
}

export default App;
