import React from "react";
import classes from "./Sneakers.module.css";
import SneakersItemForm from "./SneakersItemForm";
const Sneakers = (props) => {
  return (
    <li>
      <div className={classes.sneakers}>
        <div className={classes.imageContainer}>
          <img className={classes.sneakersImage} src={props.picture}></img>
        </div>
        <h4>{props.name}</h4>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <SneakersItemForm
          item={{
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price.toFixed(2),
          }}
        />
      </div>
    </li>
  );
};

export default Sneakers;
