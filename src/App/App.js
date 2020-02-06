import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Posts from './components/Posts'
import Toolbar from './components/Toolbar'
import classes from './App.module.scss'


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover
      />
      <Toolbar />
      <main className={classes.content}>
        <Posts />
      </main>
    </>
  )
}

export default App
