import React from "react";
import classes from "./Header.module.css";
import shoesImage from "../../assets/shoesCover.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>ShoesPremium</h1>
        <HeaderCartButton />
      </header>
      <div className={classes.mainImage}>
        <img src={shoesImage} alt="shoes" />
      </div>
    </React.Fragment>
  );
};

export default Header;
