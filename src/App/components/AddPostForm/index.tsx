import React, { Component, ChangeEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toast } from 'react-toastify'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

import classes from './AddPostForm.module.scss'
import * as actions from '../../redux/actions'
import blobToDataURI from '../../services/blobToDataURI'

interface IState {
  photo: File | null
  description: string
}

interface IProps extends ConnectedProps<typeof connector>{
  // actions: typeof actions
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
            likes: 0,
            createdAt: new Date(),
            imageUrl: res,
            description: this.state.description,
            comments: [],
          }),
        )
        //TODO Sending spinner
        .then(() =>
          this.setState({
            photo: null,
            description: '',
          }),
        )
        .catch((error) => {
          toast.error(`Can\`t load file ${error}`)
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
          <CloudUploadIcon />
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

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
})

const connector = connect(
  null,
  mapDispatchToProps
)

export default connector(AddPostForm)
