import React from 'react'
import Post from './Post/Post';

import avatar from '../../assets/avatar.jpg';
import img from '../../assets/cat.jpeg'

const Posts = () => {
    return (
        <div>
            <Post 
                name={'Basya'}
                avatar={avatar}
                img={img}
                liked />
        </div>
    )
}

export default Posts
