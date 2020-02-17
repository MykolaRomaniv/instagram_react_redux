import React from 'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import classes from './PostHeader.module.scss'
import * as actions from '../../../../redux/actions'
import { IPost } from '..'
import { ActionTypes } from 'App/redux/types'

interface IProps extends ConnectedProps<typeof connector>{
  post: IPost
}

const postHeader = (props: IProps): JSX.Element => {
  const {avatar, userName, id} = props.post;

  return (
    <div className={classes.postHeader}>
      <div className={classes.user}>
        <img className={classes.avatar} src={avatar ? avatar.toString() : ""} alt="avatar" />
        <div className={classes.name}>{userName}</div>
      </div>
      <DeleteOutlinedIcon
        className={classes.deleteIcon}
        onClick={() => props.actions.deletePost(id)}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(
  null,
  mapDispatchToProps
)

export default connector(postHeader)
