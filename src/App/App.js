import React from 'react';

import Posts from './components/Posts';
import Toolbar from './components/Toolbar';
import classes from './App.module.scss';

function App() {
  return (
    <>
    <Toolbar />
    <main className={classes.content}>
      <Posts />
    </main>
    </>
  );
}

export default App;
