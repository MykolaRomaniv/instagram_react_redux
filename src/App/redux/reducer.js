import * as actionTypes from './types';

const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      console.log('Loading');
      return {
        post: []
      }
    case actionTypes.UPDATE_POSTS:
      console.log('Posts recived')
      return {
        posts: action.posts
      }
    default:
      return state
  }
}

export default reducer;