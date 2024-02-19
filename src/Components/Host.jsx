import React from 'react';
import './Host.css'

function Host({ host }) {
  return (
    <div className="host-container">
      <p className="host-text">{host.name}</p>
      <img className="host-img" src={host.picture} alt="host_image"></img>
    </div>
  )
}

export default Host
