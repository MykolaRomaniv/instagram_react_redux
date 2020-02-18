import { ActionTypes } from 'App/redux/types'
import React, { ChangeEvent, Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { IPost } from '..'
import * as actions from '../../../../redux/actions'
import classes from './CpmmentInput.module.scss'

interface IState {
  comment: string
}

interface IProps extends ConnectedProps<typeof connector> {
  post: IPost
}

class СommentInput extends Component<IProps, IState> {
  readonly state: IState = {
    comment: '',
  }

  postCommentHandler = () => {
    const { comment } = this.state
    const {actions, post} = this.props

    if (comment) {
      actions.addComment(post, comment)
    }
    this.setState({
      comment: '',
    })
  }

  textChangedHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      comment: event.target.value,
    })
  }

  render(): JSX.Element {
    return (
      <div className={classes.commentForm}>
        <textarea
          className={classes.commentInput}
          placeholder="Add a comment..."
          onChange={this.textChangedHandler}
          value={this.state.comment}
        ></textarea>
        <button onClick={this.postCommentHandler} className={classes.postBtn}>
          Post
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(null, mapDispatchToProps)

export default connector(СommentInput)
