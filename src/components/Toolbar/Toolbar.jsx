import React from 'react';
import classes from './Toolbar.module.scss';
import instaLogo from '../../assets/instagram.png';

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>
        <img className={classes.title} src={instaLogo} alt="" />
      </div>
    </header>
  );
};

export default Toolbar;
