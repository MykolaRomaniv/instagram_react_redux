import * as actionTypes from './types';

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        post: []
      }
    case actionTypes.UPDATE_POSTS:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state
  }
}

export default reducer;