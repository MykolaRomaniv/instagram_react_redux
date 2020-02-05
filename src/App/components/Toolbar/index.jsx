import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Modal from '../UI/Modal';

import classes from './Toolbar.module.scss';
import instaLogo from '../../../assets/instagram.png';
import AddPostForm from '../AddPostForm/index';

class Toolbar extends Component {
  state = {
    open: false
  };

  toggleOpenHandler = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <header className={classes.toolbar}>
        <Modal show={this.state.open} modalClosed={this.toggleOpenHandler} >
          <AddPostForm clicked={this.toggleOpenHandler} />
        </Modal>
        <img className={classes.title} src={instaLogo} alt="" />
        <AddBoxIcon
          onClick={this.toggleOpenHandler}
          className={classes.addBtn}
          fontSize="large"
        />
      </header>
    );
  }
}

export default Toolbar;
