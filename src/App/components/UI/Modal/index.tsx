import React from 'react'

import classes from './Modal.module.scss'
import Backdrop from '../Backdrop'

interface IProps {
  show: boolean
  modalClosed: () => void
  children: any
}

const modal = (props: IProps): JSX.Element => {
  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  )
}

export default modal
