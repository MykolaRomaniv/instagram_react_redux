import React from 'react';


import classes from './Post.module.scss';
import PostHeader from './PostHeader';
import IconBtns from './IconBtns';
import PostImage from './PostImage';
import Comments from './Comments';
import CommentInput from './CommentInput';
// import CreateDate from './CreatedDate';

const Post = props => {
    return (
      <div className={classes.Post}>
        <PostHeader avatar={props.avatar} name={props.name} />
        <PostImage img={props.img} />
        <IconBtns likesNumber={props.likesNumber} />
        <Comments comments={props.comments} />
        {/* <CreateDate createdAt={props.createdAt} /> */}
        <CommentInput />
      </div>
    );
}

export default Post;
