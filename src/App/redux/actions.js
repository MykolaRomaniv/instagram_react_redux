import * as actionTypes from './types';
import axios from '../../services/axios';

const loadingPosts = () => {
  return {
    type: actionTypes.LOADING_POSTS
  };
};

const get = response => {
  return {
    type: actionTypes.GET_POSTS,
    payload: {
      posts: response.data
    }
  };
};

export const getPosts = () => {
  return dispatch => {
    dispatch(loadingPosts());

    axios
      .get('/posts')
      .then(response => {
        dispatch(get(response));
      })
      .catch(error => {
        console.error('Can`t get data from server', error);
      });
  };
};

const del = postId => {
  return {
    type: actionTypes.DELETE_POST,
    payload: {
      postId: postId
    }
  };
};

export const deletePost = (postId) => {
  return dispatch => {
    console.log('Deleting posts');

    axios
      .delete('/posts/' + postId)
      .then(res => {
        dispatch(del(postId));
      })
      .catch(error => {
        console.error('Can`t delete post', error);
      });
  };
};

const add = postId => {
  return {
    type: actionTypes.ADD_POST,
    payload: {
      postId: postId
    }
  };
};

export const addPost = postId => {
  return dispatch => {
    console.log('Adding posts');

    axios
      .post('/posts')
      .then(res => {
        dispatch(add(postId));
      })
      .catch(error => {
        console.error('Can`t add post', error);
      });
  };
};
