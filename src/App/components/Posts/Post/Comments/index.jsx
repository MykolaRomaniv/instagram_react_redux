import React from 'react';

import classes from './Comments.module.scss';

const comments = props => {
  let comments = [];
  if (props.comments && props.comments.length) {
    if (typeof props.comments === 'string') {
      comments = props.comments;
    } else {
      comments = props.comments.map((comment, index) => {
        return (
          <div key={index} className={classes.comment}>
            {comment}
          </div>
        );
      });
    }
  }

  return <div className={classes.commentList}>{comments}</div>;
};

export default comments;
