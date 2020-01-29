import React from 'react';

import classes from './PostDescription.module.scss';

const postDescription = props => {
    return (
        <div className={classes.description} >
            <span className={classes.userName}>{props.userName}</span>{' ' + props.desc}
        </div>
    )
}

export default postDescription;