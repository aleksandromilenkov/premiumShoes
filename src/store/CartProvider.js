import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// reducer function
const cartReducer = (state, action) => {
  if (action.type === "CLEAR") {
    const newArray = [];
    const newTotalAmount = 0;
    return {
      items: newArray,
      totalAmount: newTotalAmount,
    };
  }
  if (action.type === "ADD") {
    const newTotalAmount = (state.totalAmount +=
      action.item.amount * +action.item.price);
    const idx = state.items.findIndex((item) => item.id === action.item.id);
    let changedItem;
    let newArray;
    if (idx >= 0) {
      let existingCartItem = state.items[idx];
      changedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      newArray = [...state.items];
      newArray[idx] = changedItem;
    } else {
      newArray = [...state.items, action.item];
    }

    return {
      items: newArray,
      totalAmount: Number(newTotalAmount),
    };
  }
  if (action.type === "REMOVE") {
    const itemStillThere = state.items.find((item) => item.id === action.id);
    const newTotalAmount = (state.totalAmount -= +itemStillThere.price);
    let newArray;
    let removedItem;
    if (itemStillThere.amount >= 2) {
      const idx = state.items.findIndex((item) => item.id === action.id);
      removedItem = {
        ...state.items[idx],
        amount: (state.items[idx].amount -= 1),
      };
      newArray = [...state.items];
      newArray[idx] = removedItem;
    } else {
      console.log("asd");
      newArray = state.items.filter((item) => item.id !== action.id);
    }
    return {
      items: newArray,
      totalAmount: newTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const closeCart = () => {
    setCartIsOpen(false);
  };
  const openCart = () => {
    console.log("first");
    setCartIsOpen(true);
  };
  const clearState = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const addItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    clearCart: clearState,
    addItem: addItem,
    removeItem: removeItem,
    openCart,
    closeCart,
    cartIsOpen: cartIsOpen,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
