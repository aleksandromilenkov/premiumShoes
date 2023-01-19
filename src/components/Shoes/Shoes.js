import React from "react";
import ShoesSummary from "./ShoesSummary";
import classes from "./Shoes.module.css";
import AvailableShoes from "./AvailableShoes";
const Shoes = (props) => {
  return (
    <div>
      <ShoesSummary />
      <AvailableShoes />
    </div>
  );
};

export default Shoes;
