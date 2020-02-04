import React from 'react';


import classes from './Post.module.scss';
import PostHeader from './PostHeader';
import IconBtns from './IconBtns';
import PostImage from './PostImage';
import Comments from './Comments';
import CommentInput from './CommentInput';
import CreateDate from './CreatedDate';
import PostDescription from './PostDescription';

const Post = props => {
    return (
      <div className={classes.Post}>
        <PostHeader avatar={props.avatar} name={props.name} id={props.id} />
        <PostImage img={props.img} />
        <IconBtns likesNumber={props.likesNumber} />
        <PostDescription desc={props.description} userName={props.name} />
        <Comments comments={props.comments} />
        <CreateDate createdAt={props.createdAt} />
        <CommentInput />
      </div>
    );
}

export default Post;
