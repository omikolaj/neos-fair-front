import React from 'react';
import classes from './Label.css';

const label = (props) => {
  return (
    <label className={classes.Label} for={props.labelFor}>{props.children}</label>
  );
};

export default label;