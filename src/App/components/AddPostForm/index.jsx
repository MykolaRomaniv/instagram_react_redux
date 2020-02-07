import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import classes from './AddPostForm.module.scss'
import * as actions from '../../redux/actions'

const blobToDataURL = async (blob) => {
  try {
    return new Promise((fulfill, reject) => {
      const reader = new FileReader()
      reader.onerror = reject
      reader.onload = () => fulfill(reader.result)
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    toast.error(`Can\`t load file${error}`)
  }
}

class AddPostForm extends Component {
  state = {
    photo: null,
    description: '',
  }

  photoUploadHandler = (event) => {
    if (event && event.target.files[0]) {
      if (event.target.files[0].size < 100000) {
        this.setState({
          photo: event.target.files[0],
        })
      } else {
        toast.error('Image to large')
      }
    }
  }

  saveClickedHandler = () => {
    if (this.state.photo) {
      blobToDataURL(this.state.photo).then((res) =>
        this.props.actions.addPost({
          photo: res,
          description: this.state.description,
        }),
      )
      this.setState({
        photo: null,
        description: '',
      })
      this.props.saveClicked()
    } else {
      toast.error('Please add image')
    }
  }

  descriptionChangeHandler = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

  render() {
    return (
      <form className={classes.form} action="#">
        <label htmlFor="photo" className={classes.photoLabel}>
          <CloudUploadIcon />{' '}
          <span>
            {this.state.photo ? this.state.photo.name : 'Choose a photo...'}
          </span>
        </label>
        <input
          id="photo"
          className={classes.photoInput}
          type="file"
          accept="image/*,image/jpeg"
          onChange={this.photoUploadHandler}
        />
        <textarea
          className={classes.description}
          placeholder="Description..."
          onChange={this.descriptionChangeHandler}
          value={this.state.description}
        />
        <button onClick={this.saveClickedHandler} className={classes.saveBtn}>
          Save
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(AddPostForm)
