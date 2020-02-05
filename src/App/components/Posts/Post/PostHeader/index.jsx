import React from 'react';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './PostHeader.module.scss';
import * as actions from '../../../../redux/actions';

const postHeader = props => {
  return (
    <div className={classes.postHeader}>
      <div className={classes.user}>
        <img className={classes.avatar} src={props.avatar} alt="avatar" />
        <div className={classes.name}>{props.name}</div>
      </div>
      <DeleteOutlinedIcon
        className={classes.deleteIcon}
        onClick={() => props.actions.deletePost(props.id)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(postHeader);
