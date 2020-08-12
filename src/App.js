import React from 'react'
import Landing from './pages/Landing/Landing'
import { CSSTransition } from 'react-transition-group'

function App () {
  return (
    <CSSTransition
      in
      appear
      timeout={1000}
      classNames='fade'
    >
      <div className='App'>
        <Landing />
      </div>
    </CSSTransition>
  )
}

export default App
