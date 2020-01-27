import React from 'react'
import likeIcon from '../../../assets/like.svg';
import likedIcon from '../../../assets/liked.svg';

const Post = (props) => {
    let liked = props.liked ? likeIcon : likedIcon;

    return (
        <div>
            <div>
                <img src={props.avatar} alt="" />
                <div>{props.name}</div>
            </div>
            <div>
                <img src={props.img} alt="" />
            </div>
            <div>
                <img src={liked} alt="" />
            </div>
            <div>
                <input type="text" />
            </div>
        </div>
    )
}

export default Post
