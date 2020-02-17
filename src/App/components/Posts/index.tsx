import { ActionTypes } from 'App/redux/types'
import { RootState } from 'index'
import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import * as actions from '../../redux/actions'
import Post, { IPost } from './Post'

interface IProps extends ConnectedProps<typeof connector> {
  posts: IPost[]
}

class Posts extends Component<IProps, {}> {
  componentDidMount = () => {
    this.props.actions.getPosts()
  }

  render(): JSX.Element {
    return (
      <>
        {this.props.posts && this.props.posts.length ? (
          this.props.posts.map((post) => <Post key={post.id} post={post} />)
        ) : (
          <p>Loading.....</p>
        )}
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Posts)
