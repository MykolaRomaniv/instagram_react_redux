import React from 'react';

import classes from './Comments.module.scss';

const comments = props => {
  return (
    <div className={classes.commentList}>
      {Array.isArray(props.comments)
        ? (props.comments.map((comment, index) => {
            return (
              <div key={index} className={classes.comment}>
                {comment}
              </div>
            );
          }))
        : props.comments}
    </div>
  );
};

export default comments;
