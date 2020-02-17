import { INewPost, IPost } from 'App/components/Posts/Post'
import { RootState } from 'index'
import moment from 'moment'
import { toast } from 'react-toastify'
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'

import axios from '../services/axios'
import * as actionTypes from './types'

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const errorNotify = (errorMsg: string): actionTypes.ActionTypes => {
  toast.error(errorMsg)
  return {
    type: actionTypes.ERROR,
    payload: {
      errorMsg,
    },
  }
}

export const getPosts = (): AppThunk => (dispatch) => {
  dispatch({
    type: actionTypes.LOADING_POSTS,
  })

  axios
    .get('/posts')
    .then((res) => {
      const sortedPosts = res.data.sort((postA: IPost, postB: IPost) => {
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

export const deletePost = (postId: number): AppThunk => (dispatch) => {
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

export const addPost = (post: INewPost, postIndex = 0): AppThunk => (dispatch) => {
  axios
    .post('/posts', post)
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

export const addLike = (
  post: IPost,
  likes: number,
): actionTypes.ActionTypes => {
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

export const addComment = (
  post: IPost,
  comment: string,
): actionTypes.ActionTypes => {
  let comments = []
  if (Array.isArray(post.comments)) {
    comments = [
      ...post.comments.slice(0, 0),
      comment,
      ...post.comments.slice(0),
    ]
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
