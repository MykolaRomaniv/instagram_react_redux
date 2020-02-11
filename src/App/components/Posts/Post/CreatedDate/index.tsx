import React from 'react'
import moment from 'moment'

import classes from './CreatedDate.module.scss'

interface IProps {
  createdAt: Date
}

const createdDate = (props: IProps): JSX.Element => {
  return (
    <div className={classes.createdDate}>
      <div>{moment(props.createdAt).fromNow()}</div>
    </div>
  )
}

export default createdDate
