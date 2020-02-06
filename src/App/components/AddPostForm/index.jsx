import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import classes from './AddPostForm.module.scss'
import * as actions from '../../redux/actions'

const blobToDataURL = async (blob) => {
  try {
    return new Promise((fulfill, reject) => {
      let reader = new FileReader()
      reader.onerror = reject
      reader.onload = () => fulfill(reader.result)
      reader.readAsDataURL(blob)
    })
  } catch (error) {
    toast.error('Can`t load file' + error)
  }
}

class AddPostForm extends Component {
  state = {
    photo: null,
    description: '',
  }

  photoUploadHandler = (event) => {
    if (event.target.files[0].size < 10000) {
      blobToDataURL(event.target.files[0]).then((res) =>
        this.setState({
          photo: res,
        }),
      )
    } else {
      toast.error('Image to large')
    }
  }

  saveClickedHandler = () => {
    this.props.actions.addPost(this.state)
    this.props.saveClicked()
  }

  descriptionChangeHandler = (event) => {
    this.setState({
      description: event.target.value,
    })
  }

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
