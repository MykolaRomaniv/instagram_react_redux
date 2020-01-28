import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.module.scss';

const Layout = props => {
  return (
    <>
      <Toolbar />
      <main className={classes.content}>{props.children}</main>
    </>
  );
};

export default Layout;
