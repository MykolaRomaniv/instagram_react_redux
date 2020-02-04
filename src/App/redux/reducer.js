import * as actionTypes from './types';

const initialState = {
  isLoading: false,
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_POSTS:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.GET_POSTS:
      return {
        isLoading: false,
        posts: action.payload.posts
      };
    case actionTypes.DELETE_POST:
      const updatedPosts = state.posts.filter(
        (item) => item.id !== action.payload.postId
      );
      return {
        ...state,
        posts: updatedPosts
      };
    case actionTypes.ADD_POST:
      const newPosts = [
        ...state.posts.slice(0, action.payload.postId),
        action.payload.post,
        ...state.posts.slice(action.postId)
      ];
      return {
        ...this.state,
        posts: newPosts
      };
    default:
      return state;
  }
};

export default reducer;
