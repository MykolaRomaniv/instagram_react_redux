import React from 'react';

import classes from './Comments.module.scss';

const comments = props => {
    let comments = [];
    props.comments.forEach((comment, user) =>
      comments.push(
        <li key={user} className={classes.comment}>
          <span style={{ fontWeight: 'bold' }}>{user}</span> {comment}
        </li>
      )
    );
    
    return (
        <ul className={classes.commentList}>{comments}</ul>
    )
}

export default comments;