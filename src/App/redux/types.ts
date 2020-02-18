import { IPost } from 'App/components/Posts/Post'

export const LOADING_POSTS = 'LOADING_POSTS'
export const GET_POSTS = 'GET_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const ADD_POST = 'ADD_POST'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ERROR = 'ERROR'

interface LoadingPostsAction {
  type: typeof LOADING_POSTS
}

interface GetPostsAction {
  type: typeof GET_POSTS
  payload: {
    posts: IPost[]
  }
}

interface DeletePostAction {
  type: typeof DELETE_POST
  payload: {
    postId: number
  }
}

interface AddPostAction {
  type: typeof ADD_POST
  payload: {
    post: IPost
    postIndex: number
  }
}

interface ToggleLikeAction {
  type: typeof TOGGLE_LIKE
  payload: {
    post: IPost
  }
}

interface AddCommentAction {
  type: typeof ADD_COMMENT
  payload: {
    post: IPost
  }
}

interface ErrorAction {
  type: typeof ERROR
  payload: {
    errorMsg: string
  }
}

export type ActionTypes =
  | ErrorAction
  | AddCommentAction
  | ToggleLikeAction
  | AddPostAction
  | DeletePostAction
  | GetPostsAction
  | LoadingPostsAction
