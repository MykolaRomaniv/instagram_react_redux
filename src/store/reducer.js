import * as actionTypes from '../store/actions';

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