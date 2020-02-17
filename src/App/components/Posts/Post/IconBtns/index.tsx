import { ActionTypes } from 'App/redux/types'
import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import commentsIcon from '../../../../../assets/comments.svg'
import likeIcon from '../../../../../assets/like.svg'
import likedIcon from '../../../../../assets/liked.svg'
import saveIcon from '../../../../../assets/save.svg'
import shareIcon from '../../../../../assets/share.svg'
import * as actions from '../../../../redux/actions'
import { IPost } from '../index'
import classes from './IconBtns.module.scss'

interface IState {
  liked: boolean
  likes: number
}

interface IProps extends ConnectedProps<typeof connector> {
  post: IPost
}

class IconBtns extends Component<IProps, IState> {
  state: IState = {
    liked: false,
    likes: 0,
  }

  componentDidMount = () => {
    this.setState({
      likes: this.props.post.likes,
    })
  }

  componentDidUpdate = () => {
    const {post, actions} = this.props
    const {likes} = this.state

    if (post.likes !== likes) {
      actions.addLike(post, likes)
    }
  }

  likeClikedHandler = () => {
    const { liked, likes } = this.state

    this.setState({
      liked: !liked,
      likes: !liked ? likes + 1 : likes - 1,
    })
  }

  render(): JSX.Element {
    const {liked, likes} = this.state
    return (
      <>
        <div className={classes.iconBtns}>
          <div>
            <img
              className={classes.heart}
              src={liked ? likedIcon : likeIcon}
              onClick={this.likeClikedHandler}
              alt="like"
            />
            <img
              className={classes.iconBtn}
              src={commentsIcon}
              alt="comments"
            />
            <img className={classes.iconBtn} src={shareIcon} alt="share" />
          </div>
          <img className={classes.iconBtn} src={saveIcon} alt="save" />
        </div>
        <div className={classes.likeNumber}>{likes} likes</div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(null, mapDispatchToProps)

export default connector(IconBtns)
