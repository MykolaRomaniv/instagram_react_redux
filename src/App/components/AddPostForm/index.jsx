import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classes from './AddPostForm.module.scss';
import * as actions from '../../redux/actions';

const blobToDataURL = (blob) => {
  return new Promise((fulfill, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => fulfill(reader.result);
    reader.readAsDataURL(blob);
  });
}

class AddPostForm extends Component {
  state = {
    photo: null,
    description: ''
  };

  photoUploadHandler = event => {
    blobToDataURL(event.target.files[0]).then(res =>
      this.setState({
        photo: res
      })
    );
  };

  descriptionChangeHandler = event => {
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <form className={classes.form} action="#">
        <input
          className={classes.photo}
          type="file"
          accept="image/*,image/jpeg"
          onChange={this.photoUploadHandler}
        />
        <textarea
          className={classes.description}
          placeholder="Description..."
          onChange={this.descriptionChangeHandler}
        />
        <button
          onClick={() => this.props.actions.addPost(this.state)}
          className={classes.saveBtn}
        >
          Save
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(AddPostForm);
