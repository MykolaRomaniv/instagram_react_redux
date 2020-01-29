import React from 'react';

import likeIcon from '../../../../assets/like.svg';
import likedIcon from '../../../../assets/liked.svg';
import classes from './Post.module.scss';

const Post = props => {
  let liked = props.isLiked ? likeIcon : likedIcon;

  let comments = [];
  props.comments.forEach((comment, user) =>
    comments.push(
      <li key={user} className={classes.comment}>
        <span style={{ fontWeight: 'bold' }}>{user}</span> {comment}
      </li>
    )
  );
  return (
    <div className={classes.Post}>
      <div className={classes.user}>
        <img className={classes.avatar} src={props.avatar} alt="" />
        <div className={classes.name}>{props.name}</div>
      </div>
      <div>
        <img className={classes.img} src={props.img} alt="" />
      </div>
      <div className={classes.likes}>
        <img className={classes.heart} src={liked} alt="" />
      </div>
      <div className={classes.likeNumber}>{props.likesNumber} likes</div>
      <div>
        <ul className={classes.commentList} >{comments}</ul>
        <form className={classes.commentForm} action="#" method="post">
          <textarea
            className={classes.commentInput}
            placeholder="Add a comment..."
          ></textarea>
          <button className={classes.postBtn}>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
