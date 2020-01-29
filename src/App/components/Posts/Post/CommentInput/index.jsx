import React from 'react';
import classes from './CpmmentInput.module.scss';

const commentInput = () => {
  return (
    <form className={classes.commentForm} action="#" method="post">
      <textarea
        className={classes.commentInput}
        placeholder="Add a comment..."
      ></textarea>
      <button className={classes.postBtn}>Post</button>
    </form>
  );
};

export default commentInput;
