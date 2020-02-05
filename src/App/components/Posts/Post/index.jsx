import React from 'react';


import classes from './Post.module.scss';
import PostHeader from './PostHeader';
import IconBtns from './IconBtns';
import PostImage from './PostImage';
import Comments from './Comments';
import CommentInput from './CommentInput';
import CreateDate from './CreatedDate';
import PostDescription from './PostDescription';

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

const Post = props => {
    return (
      <div className={classes.post}>
        <PostHeader avatar={props.post.avatar} name={props.post.userName} id={props.post.id} />
        <PostImage img={props.post.imageUrl} />
        <IconBtns likesNumber={props.post.likes} post={props.post} />
        <PostDescription desc={props.post.description} userName={props.post.userName} />
        <Comments comments={props.post.comments} />
        <CreateDate createdAt={props.post.createdAt} />
        <CommentInput />
      </div>
    );
}

export default Post;
