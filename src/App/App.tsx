import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Posts from './components/Posts'
import Toolbar from './components/Toolbar'
import classes from './App.module.scss'

const App = (): JSX.Element => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        draggable={true}
        pauseOnHover={true}
      />
      <Toolbar />
      <main className={classes.content}>
        <Posts />
      </main>
    </>
  )
}

export default App
