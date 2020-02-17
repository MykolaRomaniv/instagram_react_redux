import React from 'react'

import classes from './PostImage.module.scss'
import { IImageUrl } from '..'

interface IProps {
  img: IImageUrl
}

const postImage = (props: IProps): JSX.Element => {
  return (
    <div>
      <img className={classes.img} src={props.img ? props.img.toString() : ""} alt="" />
    </div>
  )
}

export default postImage
