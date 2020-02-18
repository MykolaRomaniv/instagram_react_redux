import React from 'react'

import classes from './Backdrop.module.scss'

interface IProps {
  show: boolean
  clicked: () => void
}

const backdrop = (props: IProps): JSX.Element | null =>
  props.show ? (
    <div className={classes.backdrop} onClick={props.clicked}></div>
  ) : null

export default backdrop
