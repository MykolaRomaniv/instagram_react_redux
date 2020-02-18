import React from 'react'

import classes from './Comments.module.scss'

interface IProps {
  comments: string[] | string
}

const comments = (props: IProps): JSX.Element => {
  return (
    <div className={classes.commentList}>
      {Array.isArray(props.comments) ? (
        props.comments.map((comment, index) => {
          return (
            <div key={index} className={classes.comment}>
              {comment}
            </div>
          )
        })
      ) : (
        <div className={classes.comment}>{props.comments}</div>
      )}
    </div>
  )
}

export default comments
