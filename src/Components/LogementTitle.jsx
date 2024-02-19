import React from 'react';
import './LogementTitle.css'

function LogementTitle({ title, location }) {
  return (
    <div className="logementTitle-container">
      <h1 className="logementTitle-text">{title}</h1>
      <h4 className="logementTitle-location">{location}</h4>
    </div>
  )
}

export default LogementTitle
