import React from "react";

import classes from "./BuildControls.css";

import BuildControl from "./build_control/build_control";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <b>{props.price.toFixed(2)}</b>
    </p>
    {controls.map(ctl => {
      return (
        <BuildControl
          key={ctl.label}
          label={ctl.label}
          added={() => props.addIng(ctl.type)}
          removed={() => props.removeIng(ctl.type)}
          disabled={props.disabled[ctl.type]}
        />
      );
    })}
    <button className={classes.OrderButton} disabled={!props.purchasable}>
      Order Now
    </button>
  </div>
);

export default buildControls;
