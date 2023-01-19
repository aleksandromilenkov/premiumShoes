import React from "react";
import classes from "./AvailableShoes.module.css";
import Sneakers from "./Sneakers";
import airForce from "../../assets/airForce.png";
import mercurial from "../../assets/mercurial.png";
import terrex from "../../assets/terrex.png";
import airMax from "../../assets/airMax.png";
const DUMMY_SHOES = [
  {
    id: "m1",
    name: "Nike Air Force 1",
    description: "The first series of the famous Air Force.",
    price: 155.99,
    picture: airForce,
  },
  {
    id: "m2",
    name: "Nike Air Max 90",
    description:
      "Strong look, great quality and always good to wear the Air Max's.",
    price: 160.99,
    picture: airMax,
  },
  {
    id: "m3",
    name: "Nike Merucial",
    description: "Need to play futsal? This is the best choice for that.",
    price: 100.0,
    picture: mercurial,
  },
  {
    id: "m4",
    name: "Adidas Terrex",
    description:
      "Great for snow conditions. Keep yourself warm and wear the German quality.",
    price: 140.0,
    picture: terrex,
  },
];

const AvailableShoes = (props) => {
  const availableShoes = DUMMY_SHOES.map((shoes) => {
    return (
      <Sneakers
        key={shoes.id}
        id={shoes.id}
        name={shoes.name}
        description={shoes.description}
        price={shoes.price}
        picture={shoes.picture}
      />
    );
  });
  return (
    <div className={classes.availableShoes}>
      <ul>{availableShoes}</ul>
    </div>
  );
};

export default AvailableShoes;
