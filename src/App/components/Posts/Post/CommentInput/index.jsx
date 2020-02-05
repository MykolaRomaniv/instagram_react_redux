import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './CpmmentInput.module.scss';
import * as actions from '../../../../redux/actions';

class commentInput extends Component {
  state ={
    comment: ''
  };

  postCommentHandler = () => {
    this.props.actions.addComment(this.props.post, this.state.comment)
    // return false;
  }

  textChangedHandler = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  render() {
    return (
      <div className={classes.commentForm} >{/*action="#" method="get" onSubmit={() => false}*/}
        <textarea
          className={classes.commentInput}
          placeholder="Add a comment..."
          onChange={this.textChangedHandler}
        ></textarea>
        <button onClick={this.postCommentHandler} className={classes.postBtn}>
          Post
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(commentInput);
