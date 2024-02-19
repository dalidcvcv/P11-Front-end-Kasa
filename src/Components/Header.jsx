import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header () {
  return (
    <div className='navBar'>
      <img className='logo' src='/logo.png' alt='logo kasa' />
      <nav className='navBar__menu'>
        <Link to="/">
          Accueil
        </Link>
        <Link to="/APropos">
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
