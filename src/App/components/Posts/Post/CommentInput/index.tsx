import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import classes from './CpmmentInput.module.scss'
import * as actions from '../../../../redux/actions'
import { IPost } from '..'


type State = Readonly<{
  comment: string
}>

type Props = {
  actions?: any
  post: IPost
}

class СommentInput extends Component<Props, State> {
  readonly state: State = {
    comment: '',
  }

  postCommentHandler = () => {
    if (this.state.comment) {
      this.props.actions.addComment(this.props.post, this.state.comment)
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

const mapDispatchToProps = (dispatch: any): any => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(СommentInput)
