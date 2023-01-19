import React, { useContext, useEffect, useRef } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const buttonRef = useRef();
  const numberOfCartItems = ctx.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );
  useEffect(() => {
    buttonRef.current.classList.add(`${classes.bump}`);
    const timer = setTimeout(() => {
      buttonRef.current.classList.remove(`${classes.bump}`);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfCartItems]);
  return (
    <button onClick={ctx.openCart} ref={buttonRef}>
      <span className={classes.cartIcon}>
        <CartIcon />
      </span>
      <span className={classes.cartText}>Your Cart</span>
      <span className={classes.numberOfOrders}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
