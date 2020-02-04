import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux';

import classes from './PostHeader.module.scss';
import { deletePost } from '../../../../redux/actions';

const postHeader = props => {
  return (
    <div className={classes.postHeader}>
      <div className={classes.user}>
        <img className={classes.avatar} src={props.avatar} alt="avatar" />
        <div className={classes.name}>{props.name}</div>
      </div>
      <DeleteOutlinedIcon
        className={classes.deleteIcon}
        onClick={() => props.delClicked(props.id)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    delClicked: postId => dispatch(deletePost(postId))
  };
};

export default connect(null, mapDispatchToProps)(postHeader);
