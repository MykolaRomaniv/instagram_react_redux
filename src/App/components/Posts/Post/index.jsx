import React, { Component } from 'react';

import likeIcon from '../../../../assets/like.svg';
import likedIcon from '../../../../assets/liked.svg';
import dotMenu from '../../../../assets/dotMenu.svg';
import commentsIcon from '../../../../assets/comments.svg';
import shareIcon from '../../../../assets/share.svg';
import saveIcon from '../../../../assets/save.svg';
import classes from './Post.module.scss';

class Post extends Component {
  state = {
    liked: false,
    likes: this.props.likesNumber
  };

  componentDidMount = () => {};

  likeClikedHandler = () => {
    this.setState({
      liked: !this.state.liked,
      likes: !this.state.liked ? this.state.likes + 1 : this.state.likes - 1
    });
  };

  render() {
    let comments = [];
    this.props.comments.forEach((comment, user) =>
      comments.push(
        <li key={user} className={classes.comment}>
          <span style={{ fontWeight: 'bold' }}>{user}</span> {comment}
        </li>
      )
    );

    return (
      <div className={classes.Post}>
        <div className={classes.postHeader}>
          <div className={classes.user}>
            <img className={classes.avatar} src={this.props.avatar} alt="" />
            <div className={classes.name}>{this.props.name}</div>
          </div>
          <img className="" src={dotMenu} alt=""></img>
        </div>
        <div>
          <img className={classes.img} src={this.props.img} alt="" />
        </div>
        <div className={classes.likes}>
          <div>
            <img
              className={classes.heart}
              src={this.state.liked ? likedIcon : likeIcon}
              onClick={this.likeClikedHandler}
              alt=""
            />
            <img
              className={classes.IconBtn}
              src={commentsIcon}
              alt="comments"
            />
            <img className={classes.IconBtn} src={shareIcon} alt="share" />
          </div>
          <img className={classes.IconBtn} src={saveIcon} alt="save" />
        </div>
        <div className={classes.likeNumber}>{this.state.likes} likes</div>
        <div>
          <ul className={classes.commentList}>{comments}</ul>
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
  }
}

export default Post;
