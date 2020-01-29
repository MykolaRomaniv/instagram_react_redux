import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actionTypes from '../../redux/types';
import Post from './Post';

const COMMENTS = new Map([
  ['test', 'testtest'],
  ['Petro', 'tralalala'],
  ['Lol', 'kek']
]);

/**
 *   
    id: '56',
    createdAt: '2019-07-22T00:30:10.777Z',
    imageUrl: 'http://lorempixel.com/640/480/cats',
    likes: 63814,
    userName: 'Blanche Murray',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/itstotallyamy/128.jpg',
    description: 'Awesome Steel Chicken Lake'
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
              comments={COMMENTS}
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
    getPosts: () => {
      axios
        .get('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts')
        .then(response => {
          console.log('responsed');
          dispatch({ type: actionTypes.UPDATE_POSTS, posts: response.data });
        })
        .catch(error => {
          console.error('Can`t get data from server');
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
