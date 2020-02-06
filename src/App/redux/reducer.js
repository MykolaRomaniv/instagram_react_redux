import * as actionTypes from './types'
import insert from '../services/insertInArr'
import change from '../services/changeInArr'
import del from '../services/deleteFromArr'

const initialState = {
  isLoading: false,
  posts: [],
}

const reducer = (state = initialState, action) => {
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
        posts: insert(
          state.posts,
          action.payload.post,
          action.payload.postIndex,
        ),
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
