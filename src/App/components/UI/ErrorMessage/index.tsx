import React from 'react'
import classes from './ErrorMessage.module.scss'

const index = (props: {error: string}): JSX.Element => {
  return <div className={classes.error}>{props.error}</div>
}

export default index
