import React, { useContext, useRef } from "react";
import classes from "./SneakersItemForm.module.css";
import CartContext from "../../store/cart-context";
const SneakersItemForm = (props) => {
  const ctx = useContext(CartContext);
  const amountRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const addedAmount = +amountRef.current.value;
    ctx.addItem({ ...props.item, amount: addedAmount });
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={classes.formInput}>
        <label htmlFor="amount">Amount</label>
        <input
          ref={amountRef}
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button className={classes.buttonSubmit} type="submit">
        + Add
      </button>
    </form>
  );
};

export default SneakersItemForm;
