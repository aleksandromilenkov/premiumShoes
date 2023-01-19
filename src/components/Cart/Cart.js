import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes.cartItems}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={Math.random()}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={ctx.removeItem.bind(this, item.id)}
            onAdd={ctx.addItem.bind(this, { ...item, amount: 1 })}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={ctx.closeCart}>
      {cartItems}
      <div className={classes.total}>
        <div>Total Amount</div>
        <div>${ctx.totalAmount.toFixed(2)}</div>
      </div>
      <div className={classes.actions}>
        {ctx.items.length > 0 && (
          <button onClick={ctx.clearCart}>Clear Cart</button>
        )}
        <button onClick={ctx.closeCart}>Close</button>
        {ctx.items.length > 0 && <button>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
