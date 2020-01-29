import React from 'react';

import classes from './PostHeader.module.scss';
import dotMenu from '../../../../../assets/dotMenu.svg';

const postHeader = props => {
  return (
    <div className={classes.postHeader}>
      <div className={classes.user}>
        <img className={classes.avatar} src={props.avatar} alt="avatar" />
        <div className={classes.name}>{props.name}</div>
      </div>
      <img className={classes.dotMenu} src={dotMenu} alt="dotmenu"></img>
    </div>
  );
};

export default postHeader;
