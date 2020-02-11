import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import classes from './AddPostForm.module.scss'
import * as actions from '../../redux/actions'
import blobToDataURI from '../../services/blobToDataURI'

interface IState {
  photo: null | File
  description: string
}

interface IProps {
  actions?: any
  saveClicked: () => void
}

class AddPostForm extends Component<IProps, IState> {
  readonly state: IState = {
    photo: null,
    description: '',
  }

  photoUploadHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target && event.target.files && event.target.files.length) {
      if (event.target.files[0].size < 100000) {
        this.setState({
          photo: event.target.files[0],
        })
      } else {
        toast.error('Image to large')
      }
    }
  }

  saveClickedHandler = (): void => {
    if (this.state.photo) {
      blobToDataURI(this.state.photo)
        .then((res) =>
          this.props.actions.addPost({
            imageUrl: res,
            description: this.state.description,
          }),
        )
        .catch((error) => {
          toast.error(`Can\`t load file ${error}`)
        })
      this.setState({
        photo: null,
        description: '',
      })
      this.props.saveClicked()
    } else {
      toast.error('Please add image')
    }
  }

  descriptionChangeHandler = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    this.setState({
      description: event.target.value,
    })
  }

  render(): JSX.Element {
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

const mapDispatchToProps = (dispatch: any): any => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatchToProps)(AddPostForm)
