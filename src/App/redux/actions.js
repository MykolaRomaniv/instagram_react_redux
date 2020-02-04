import * as actionTypes from './types';
import axios from '../../services/axios';

const loadingPosts = () => {
  return {
    type: actionTypes.LOADING_POSTS
  };
};

const updatePosts = (response) => {
    return {
        type: actionTypes.UPDATE_POSTS,
        payload: { posts: response.data} 
    }
}

export const getData = () => {
  return dispatch => {
    dispatch(loadingPosts());
    axios.get('/posts')
      .then(response => {
        dispatch(updatePosts(response));
      })
      .catch(error => {
        console.error('Can`t get data from server', error);
      });
  };
};
