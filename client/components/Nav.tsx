import React, { useState } from 'react'
import logo from '../../Public/Images/dolphlogo.png'
import '../styles/index.scss'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div id="logo1">
        <img src={logo} alt="App logo" />
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#find" className="nav-link">
          Find
        </a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  )
}

export default Nav
