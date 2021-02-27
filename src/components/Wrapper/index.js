import React from "react";
import classes from '../../css/compon.module.css';

function Wrapper(props) {
  return <main className={classes.wrapper}>{props.children}</main>;
}

export default Wrapper;
