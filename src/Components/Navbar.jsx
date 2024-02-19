import React from 'react';
import './Header.css'

function Header() {
  return (
    <nav className='header'> 
    <div className='header_logo'>
        <img src='logo.png' alt='logo'/>
    </div>
    <div>Accueil</div>
    <div>A Propos</div>
    </nav>
  )
}

export default Header
