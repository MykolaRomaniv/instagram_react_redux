import React from 'react'

import classes from './Post.module.scss'
import PostHeader from './PostHeader'
import IconBtns from './IconBtns'
import PostImage from './PostImage'
import Comments from './Comments'
import CommentInput from './CommentInput'
import CreateDate from './CreatedDate'
import PostDescription from './PostDescription'

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

export interface IPost {
  id?: number
  createdAt: Date
  imageUrl: IImageUrl
  likes: number
  userName?: string
  avatar?: IImageUrl
  description: string
  comments: string[]
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
