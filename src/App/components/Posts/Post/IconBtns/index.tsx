import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import classes from './IconBtns.module.scss'
import likeIcon from '../../../../../assets/like.svg'
import likedIcon from '../../../../../assets/liked.svg'
import commentsIcon from '../../../../../assets/comments.svg'
import shareIcon from '../../../../../assets/share.svg'
import saveIcon from '../../../../../assets/save.svg'
import * as actions from '../../../../redux/actions'
import { IPost } from '../index'

interface IProps {
  post: IPost
  actions?: typeof actions
}

interface IState {
  liked: boolean
  likes: number
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
    if (this.props.post.likes !== this.state.likes) {
      this.props.actions!.addLike(this.props.post, this.state.likes)
    }
  }

  likeClikedHandler = () => {
    this.setState({
      liked: !this.state.liked,
      likes: !this.state.liked ? this.state.likes + 1 : this.state.likes - 1,
    })
  }

  render(): JSX.Element {
    return (
      <>
        <div className={classes.iconBtns}>
          <div>
            <img
              className={classes.heart}
              src={this.state.liked ? likedIcon : likeIcon}
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
        <div className={classes.likeNumber}>{this.state.likes} likes</div>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: any): any => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(IconBtns)
