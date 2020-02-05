import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Post from './Post';
import * as actions from '../../redux/actions';

class Posts extends Component {
  componentDidMount = () => {
    this.props.actions.getPosts();
  };

  render() {
    return (
      <>
        {this.props.posts && this.props.posts.length ? (
          this.props.posts.map(post => (
            <Post
              key={post.id}
              post={post}
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
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
