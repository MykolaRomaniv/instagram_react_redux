import * as actionTypes from './types';

const initialState = {
    posts: []
};

const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.UPDATE_POSTS) {
        return {
            posts: action.posts
        }
    }
    return state;
}

export default reducer;