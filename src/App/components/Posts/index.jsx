import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import * as actions from '../../redux/actions';

/**
 *   
    id: '56',
    createdAt: '2019-07-22T00:30:10.777Z',
    imageUrl: 'http://lorempixel.com/640/480/cats',
    likes: 63814,
    userName: 'Blanche Murray',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/itstotallyamy/128.jpg',
    description: 'Awesome Steel Chicken Lake'
    comments: ["asdad", "adsda"] // or "qwerty"
 */

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };

  render() {
    return (
      <>
        {this.props.posts && this.props.posts.length ? (
          this.props.posts.map(post => (
            <Post
              key={post.id}
              creationDate={post.createdAt}
              img={post.imageUrl}
              likesNumber={post.likes}
              name={post.userName}
              avatar={post.avatar}
              description={post.description}
              createdAt={post.createdAt}
              comments={post.comments}
            />
          ))
        ) : (
          <p>Loading.....</p>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch( actions.getData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
