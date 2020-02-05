import * as actionTypes from './types';
import axios from '../../services/axios';

export const getPosts = () => dispatch => {
  dispatch({
    type: actionTypes.LOADING_POSTS
  });

  axios
    .get('/posts')
    .then(response => {
      dispatch({
        type: actionTypes.GET_POSTS,
        payload: {
          posts: response.data
        }
      });
    })
    .catch(error => {
      console.error('Can`t get data from server', error);
    });
};

export const deletePost = postId => dispatch => {
  console.log('Deleting posts');

  axios
    .delete('/posts/' + postId)
    .then(res => {
      dispatch({
        type: actionTypes.DELETE_POST,
        payload: {
          postId: postId
        }
      });
    })
    .catch(error => {
      console.error('Can`t delete post', error);
    });
};

export const addPost = (post, postIndex = 0) => dispatch => {
  console.log('Adding posts');

  const newPost = {
    createAt: new Date(),
    imageUrl: post.photo,
    likes: 0,
    description: post.description
  };
  axios
    .post('/posts', newPost)
    .then(res => {
      dispatch({
        type: actionTypes.ADD_POST,
        payload: {
          post: res.data,
          postIndex: postIndex
        }
      });
    })
    .catch(error => {
      console.error('Can`t add post', error);
    });
};

// export const addLike = (post) => dispatch => {
//   console.log('Sending like');

//   axios
//     .put('/posts/' + post.id, post)
//     .then(res => {
//       dispatch({
//         type: actionTypes.TOGGLE_LIKE,
//         payload: {
//           post: post
//         }
//       });
//     })
//     .catch(error => {
//       console.error('Can`t change like', error);
//     });
// };

export const addLike = (post, likes) => {
  return {
    type: actionTypes.TOGGLE_LIKE,
    payload: {
      post: {...post, likes: likes}
    }
  }
}