import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Post, { IPost } from './Post'
import * as actions from '../../redux/actions'

interface IProps {
  actions: typeof actions
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

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
