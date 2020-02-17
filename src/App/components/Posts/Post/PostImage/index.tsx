import React from 'react'

import { IImageUrl } from '..'
import classes from './PostImage.module.scss'

interface IProps {
  img: IImageUrl
}

const postImage = (props: IProps): JSX.Element => {
  return (
    <div>
      <img
        className={classes.img}
        src={props.img ? props.img.toString() : ''}
        alt=""
      />
    </div>
  )
}

export default postImage
