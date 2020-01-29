import React, { Component } from 'react';

import likeIcon from '../../../../assets/like.svg';
import likedIcon from '../../../../assets/liked.svg';
import classes from './Post.module.scss';

class Post extends Component {
  state = {
    liked: false,
    comments: [],
    likes: this.props.likesNumber
  };

  componentDidMount = () => {
    this.props.comments.forEach((comment, user) =>
      this.state.comments.push(
        <li key={user} className={classes.comment}>
          <span style={{ fontWeight: 'bold' }}>{user}</span> {comment}
        </li>
      )
    );
  };

  likeClikedHandler = () => {
      this.setState({
        liked: !this.state.liked,
        likes: !this.state.liked ? this.state.likes + 1 : this.state.likes - 1
      })
  };

  render() {
    return (
      <div className={classes.Post}>
        <div className={classes.user}>
          <img className={classes.avatar} src={this.props.avatar} alt="" />
          <div className={classes.name}>{this.props.name}</div>
        </div>
        <div>
          <img className={classes.img} src={this.props.img} alt="" />
        </div>
        <div className={classes.likes}>
          <img
            className={classes.heart}
            src={this.state.liked ? likedIcon : likeIcon}
            onClick={this.likeClikedHandler}
            alt=""
          />
        </div>
        <div className={classes.likeNumber}>{this.state.likes} likes</div>
        <div>
          <ul className={classes.commentList}>{this.state.comments}</ul>
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
