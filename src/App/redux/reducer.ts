import * as actionTypes from './types'
import change from '../services/changeInArr'
import del from '../services/deleteFromArr'
import { IPost } from 'App/components/Posts/Post'

interface IPostStorage {
  isLoading: boolean
  posts: IPost[]
}

const initialState: IPostStorage = {
  isLoading: false,
  posts: [],
}

const reducer = (
  state = initialState,
  action: actionTypes.ActionTypes,
): IPostStorage => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.GET_POSTS:
      return {
        isLoading: false,
        posts: action.payload.posts,
      }
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: del(state.posts, action.payload.postId),
      }
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, action.payload.postIndex),
          action.payload.post,
          ...state.posts.slice(action.payload.postIndex),
        ],
      }
    case actionTypes.TOGGLE_LIKE:
      return {
        ...state,
        posts: change(state.posts, action.payload.post),
      }
    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((item) => {
          return item.id === action.payload.post.id
            ? {
                ...action.payload.post,
              }
            : item
        }),
      }
    // case actionTypes.ERROR:
    //   return state;
    default:
      return state
  }
}

export default reducer
