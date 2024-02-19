import React from 'react'
import './Card.css';
import { NavLink } from 'react-router-dom'
import CardDatas from '../data/logements.json';

function Card() {
  return (
    <section className="card-container">
      {CardDatas &&
        CardDatas.map((carddata, index) => {
          return (
            <NavLink
              className="cards"
              to={`Apartment/${carddata.id}`}
              key={carddata.id + index}
            >
              <img
                className="card-cards_img"
                src={carddata.cover}
                alt="card_image"
              />
              <p className="card-cards_title">{carddata.title}</p>
            </NavLink>
          )
        })}
    </section>
  )
}

export default Card
