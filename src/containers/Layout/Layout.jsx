import React from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
