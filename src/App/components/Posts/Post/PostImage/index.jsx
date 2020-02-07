import React from 'react'

import classes from './PostImage.module.scss'

const postImage = (props) => {
  return (
    <div>
      <img className={classes.img} src={props.img} alt="" />
    </div>
  )
}

export default postImage
