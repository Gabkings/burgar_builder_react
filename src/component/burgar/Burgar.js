import React from "react";

import classes from "./Burgar.css";

import BurgarIngridents from "./burgar_ingridents/Burgar_Ingridents";

const burgar = props => {
  let transFormedIngr = Object.keys(props.ingridients)
    .map(igKey => {
      console.log(igKey);
      return [...Array(props.ingridients[igKey])].map((_, i) => {
        console.log(_ + " ==> " + i);
        return <BurgarIngridents key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transFormedIngr.length === 0) {
    transFormedIngr = <p>PLease add some Ingridients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgarIngridents type="bread-top" />
      {transFormedIngr}
      <BurgarIngridents type="bread-bottom" />
    </div>
  );
};

export default burgar;
