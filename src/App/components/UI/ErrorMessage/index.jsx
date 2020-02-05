import React from 'react';
import classes from './ErrorMessage.module.scss';

const index = props => {
  return <div className={classes.error}>{props.error}</div>;
};

export default index;
