import React from 'react'

import classes from './PostDescription.module.scss'
import { IPost } from '..'

interface IProps {
  post: IPost
}

const postDescription = (props: IProps): JSX.Element => {
  const {userName, description} = props.post
  return (
    <div className={classes.description}>
      <span className={classes.userName}>{userName}</span>
      {` ${description}`}
    </div>
  )
}

export default postDescription
