import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src='/logo_footer.png' alt='logo' />
      </div>
      <div><h3 className='h3'> © 2020 Kasa. All rights reserved </h3></div>
    </div>
  );
}


export default Footer