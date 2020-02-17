import AddBoxIcon from '@material-ui/icons/AddBox'
import React, { Component } from 'react'

import instaLogo from '../../../assets/instagram.png'
import AddPostForm from '../AddPostForm'
import Modal from '../UI/Modal'
import classes from './Toolbar.module.scss'

class Toolbar extends Component {
  state = {
    open: false,
  }

  toggleOpenHandler = (): void => {
    this.setState({
      open: !this.state.open,
    })
  }

  render(): JSX.Element {
    return (
      <header className={classes.toolbar}>
        <Modal show={this.state.open} modalClosed={this.toggleOpenHandler}>
          <AddPostForm saveClicked={this.toggleOpenHandler} />
        </Modal>
        <div className={classes.title}>
          <img src={instaLogo} alt="" />
        </div>
        <AddBoxIcon
          onClick={this.toggleOpenHandler}
          className={classes.addBtn}
          fontSize="large"
        />
      </header>
    )
  }
}

export default Toolbar
