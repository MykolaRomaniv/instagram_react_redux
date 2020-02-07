import moment from 'moment'
import { toast } from 'react-toastify'
import axios from '../services/axios'

import * as actionTypes from './types'
import insert from '../services/insertInArr'

export const errorNotify = (errorMsg) => {
  toast.error(errorMsg)
  return {
    type: actionTypes.ERROR,
    payload: {
      errorMsg,
    },
  }
}

export const getPosts = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_POSTS,
  })

  axios
    .get('/posts')
    .then((res) => {
      const sortedPosts = res.data.sort((postA, postB) => {
        return moment(postA.createdAt).isBefore(postB.createdAt, 'second')
          ? 1
          : -1
      })

      dispatch({
        type: actionTypes.GET_POSTS,
        payload: {
          posts: sortedPosts,
        },
      })
    })
    .catch((error) => {
      dispatch(errorNotify(`Can\`t get data from server${error}`))
    })
}

export const deletePost = (postId) => (dispatch) => {
  axios
    .delete(`/posts/${postId}`)
    .then(() => {
      dispatch({
        type: actionTypes.DELETE_POST,
        payload: {
          postId,
        },
      })
    })
    .catch((error) => {
      dispatch(errorNotify(`Can\`t delete post${error}`))
    })
}

export const addPost = (post, postIndex = 0) => (dispatch) => {
  const newPost = {
    createAt: new Date(),
    imageUrl: post.photo,
    likes: 0,
    description: post.description,
  }
  axios
    .post('/posts', newPost)
    .then((res) => {
      dispatch({
        type: actionTypes.ADD_POST,
        payload: {
          post: res.data,
          postIndex,
        },
      })
    })
    .catch((error) => {
      dispatch(errorNotify(`Can\`t add post${error}`))
    })
}

// export const addLike = (post) => dispatch => {

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
      post: {
        ...post,
        likes,
      },
    },
  }
}

export const addComment = (post, comment) => {
  let comments = []
  if (Array.isArray(post.comments)) {
    comments = insert(post.comments, comment, 0)
  } else if (typeof post.comments === 'string') {
    comments = [comment, post.comments]
  } else {
    comments = [comment]
  }

  return {
    type: actionTypes.ADD_COMMENT,
    payload: {
      post: {
        ...post,
        comments,
      },
    },
  }
}
