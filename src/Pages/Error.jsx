import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-text">
        Oups! La page que <br /> vous demandez n'existe pas.
      </p>
      <div className="error-link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  )
}

export default Error
