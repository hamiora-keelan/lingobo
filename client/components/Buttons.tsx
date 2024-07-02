import React, { useState } from 'react'
import Modal from './Modal'
import SignUpForm from './Forms/SignUp'
import LoginForm from './Forms/Login' // Adjust the import path as necessary
import '../styles/index.scss'

const AuthButtons: React.FC = () => {
  const [isSignUpOpen, setSignUpOpen] = useState(false)
  const [isLoginOpen, setLoginOpen] = useState(false)

  return (
    <div className="button-container">
      <button className="button" onClick={() => setSignUpOpen(true)}>
        Sign Up
      </button>
      <button className="button" onClick={() => setLoginOpen(true)}>
        Log In
      </button>
      <Modal isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
        <SignUpForm />
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <LoginForm />
      </Modal>
    </div>
  )
}

export default AuthButtons
