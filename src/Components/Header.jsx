import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation();

  return (
    <div className='navBar'>
      <img className='logo' src='/logo.png' alt='logo kasa' />
      <nav className='navBar__menu'>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/APropos" className={location.pathname === '/APropos' ? 'active' : ''}>
          A Propos
        </Link>
      </nav>
    </div>
  )
}

export default Header
