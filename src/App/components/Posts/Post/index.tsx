import React from 'react'

import CommentInput from './CommentInput'
import Comments from './Comments'
import CreateDate from './CreatedDate'
import IconBtns from './IconBtns'
import classes from './Post.module.scss'
import PostDescription from './PostDescription'
import PostHeader from './PostHeader'
import PostImage from './PostImage'

/**
 * {
 *  "id":"29",
 *  "createdAt":"2020-01-29T14:16:30.233Z",
 *  "imageUrl":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/,
 *  "likes":28823,
 *  "userName":"Miss Shanon Kilback",
 *  "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kamal_chaneman/128.jpg",
 *  "description":"calculating Lakes",
 *  "comments":["Варка","варила","вареника","Варку","вареником"]
 * }
 */
export type IImageUrl = string | ArrayBuffer | null

export interface INewPost {
  createdAt: Date
  imageUrl: IImageUrl
  likes: number
  description: string
  comments: string[]
}

export interface IPost extends INewPost {
  id: number
  userName: string
  avatar: IImageUrl
}

type IProps = Readonly<{
  post: IPost
}>

const Post = (props: IProps): JSX.Element => {
  return (
    <div className={classes.post}>
      <PostHeader post={props.post} />
      <PostImage img={props.post.imageUrl} />
      <IconBtns post={props.post} />
      <PostDescription post={props.post} />
      <Comments comments={props.post.comments} />
      <CreateDate createdAt={props.post.createdAt} />
      <CommentInput post={props.post} />
    </div>
  )
}

export default Post
