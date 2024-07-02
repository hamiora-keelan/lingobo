import React from 'react'
import { Outlet } from 'react-router-dom'
import WelcomeMessages from './GetWelcome.tsx'
import Nav from './Nav.tsx'
import AuthButtons from './Buttons'
import '../styles/index.scss'

const App: React.FC = () => {
  return (
    <>
      <div className="horizontal-container">
        <Nav />
      </div>
      <div className="app color-main">
        <WelcomeMessages />
        <AuthButtons />
        <Outlet />
      </div>
    </>
  )
}

export default App
