import React from "react";
import classes from "./ShoesSummary.module.css";
const ShoesSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h3>Top sneakers, world wide shipping</h3>
      <p>Choose your favorite pair of sneakers with premium quality.</p>
      <p>We will make sure to deliver them to you ASAP! </p>
    </section>
  );
};

export default ShoesSummary;
