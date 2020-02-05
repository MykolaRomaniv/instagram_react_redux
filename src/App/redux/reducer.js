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
        item => item.id !== action.payload.postId
      );
      return {
        ...state,
        posts: updatedPosts
      };
    case actionTypes.ADD_POST:
      const newPosts = state.posts.slice();
      newPosts.splice(action.payload.postIndex, 0, action.payload.post);
      return {
        ...state,
        posts: newPosts
      };
    case actionTypes.TOGGLE_LIKE:
      const posts = state.posts.map(item => {
        return item.id === action.payload.post.id
          ? { ...action.payload.post }
          : item;
      });
      return {
        ...state,
        posts: posts
      };
    case actionTypes.ADD_COMMENT: 
      // const posts = state.posts.map(item => {
      //   return item.id === action.payload.post.id
      //     ? { ...action.payload.post }
      //     : item;
      // });
      console.log('ku', action.payload);
      return {
        ...state,
        posts: state.posts.map(item => {
          return item.id === action.payload.post.id
            ? { ...action.payload.post }
            : item;
        })
      };
    default:
      return state;
  }
};

export default reducer;
