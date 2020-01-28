import React from "react";
import likeIcon from "../../../assets/like.svg";
import likedIcon from "../../../assets/liked.svg";
import classes from "./Post.module.scss";

const Post = props => {
  let liked = props.isLiked ? likeIcon : likedIcon;

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
        <div>{props.likesNumber}</div>
      </div>
      <div>

        <form className={classes.commentSection} action="#" method="post">
          <textarea
            className={classes.comment}
            placeholder="Add a comment..."
          ></textarea>
          <button className={classes.postBtn}>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
