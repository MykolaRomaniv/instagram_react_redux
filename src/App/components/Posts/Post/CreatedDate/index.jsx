import React from 'react';
import moment from 'moment';

import classes from './CreatedDate.module.scss';

const createdDate = props => {
  return (
    <div className={classes.createdDate}>
      <div>{moment(props.createdAt).fromNow()} AGO</div>
    </div>
  );
};

export default createdDate;
