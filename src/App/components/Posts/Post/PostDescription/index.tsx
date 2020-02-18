import React from 'react'

import { IPost } from '..'
import classes from './PostDescription.module.scss'

interface IProps {
  post: IPost
}

const postDescription = (props: IProps): JSX.Element => {
  const { userName, description } = props.post
  return (
    <div className={classes.description}>
      <span className={classes.userName}>{userName}</span>
      {` ${description}`}
    </div>
  )
}

export default postDescription
